using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using Dapper;
using Npgsql;
using System.Data;

namespace ElmoveApi.Store
{
    public interface IDataStore
    {
        Task<IEnumerable<Data>> Get();
    }

    public class DataStore : IDataStore
    {
        string connectionString = null;
        public DataStore(string con) 
        {
            connectionString = con;
        }
        public async Task<IEnumerable<Data>> Get()
        {
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                var query = "SELECT * FROM Datas";
                return await db.QueryAsync<Data>(query);
            }
        }
    }
}