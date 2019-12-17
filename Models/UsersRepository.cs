using System.Threading.Tasks;
using System.Collections.Generic;
using Dapper;
using Npgsql;
using System.Data;

namespace ElmoveApi.Models
{
    public interface IUsersRepository 
    {
        Task Create(User user);
        Task<User> GetById(long id);
        Task<IEnumerable<User>> Search();
        Task Update(User user);
        Task Delete(long id);
    }

    public class UsersRepository : IUsersRepository
    {
        string connectionString = null;
        public UsersRepository(string con) {
            connectionString = con;
        }

        public IDbConnection Connection
        {
            get
            {
                var db = new NpgsqlConnection(connectionString);
                db.Open();
                return db;
            }
        }

        public async Task Create(User user)
        {
            using (IDbConnection db = Connection)
            {
                var sqlQuery = "INSERT INTO Users (Username, Email, Password) VALUES(@username, @email, @password)";
                await db.ExecuteAsync(sqlQuery, user);
            }
        }

        public async Task<User> GetById(long id)
        {
            using (IDbConnection db = Connection)
            {
                return await db.QueryFirstOrDefaultAsync<User>("SELECT * FROM Users WHERE Id = @id", new {Id = id});
            }
        }

        public async Task<IEnumerable<User>> Search() {
            using (IDbConnection db = Connection)
            {
                return await db.QueryAsync<User>("SELECT * FROM Users");
            }
        }

        public async Task Update(User user)
        {
            using (IDbConnection db = Connection)
            {
                var sqlQuery = "UPDATE Users SET Username = @username, Email = @email, Password = @password WHERE Id = @id";
                await db.ExecuteAsync(sqlQuery, user);
            }
        }

        public async Task Delete(long id)
        {
            using (IDbConnection db = Connection)
            {
                await db.ExecuteAsync("DELETE FROM Users WHERE Id = @id", new {Id = id});
            }
        }
    }
}