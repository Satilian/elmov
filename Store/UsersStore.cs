using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using Dapper;
using Npgsql;
using System.Data;
using ElmoveApi.Models;

namespace ElmoveApi.Store
{
    public interface IUsersStore 
    {
        Task<SignUpRequest> Get(SignInRequest req);
        Task Create(SignUpRequest user);
    }

    public class UsersStore : IUsersStore
    {
        string connectionString = null;
        public UsersStore(string con) {
            connectionString = con;
        }
        public async Task<SignUpRequest> Get(SignInRequest req)
        {
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                var query = "SELECT * FROM Users WHERE Password = @password AND (Username = @name OR Email = @name)";
                return await db.QueryFirstOrDefaultAsync<SignUpRequest>(query, req);
            }
        }
        public async Task Create(SignUpRequest user)
        {
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                var sqlQuery = "INSERT INTO Users (Username, Email, Password) VALUES(@username, @email, @password)";
                await db.ExecuteAsync(sqlQuery, user);
            }
        }
    }
}