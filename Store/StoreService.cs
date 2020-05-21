using Microsoft.Extensions.DependencyInjection;
using ElmoveApi.Store;

namespace ElmoveApi
{
  public class StoreService
  {
    public IUsersStore users {get;}
    public IDataStore data {get;}
    public StoreService(string con)
    {
        users = new UsersStore(con);
        data = new DataStore(con);
    }

  }
  public static class ServiceProviderExtensions
  {
      public static void AddStoreService(this IServiceCollection services, string connection)
      {
          services.AddTransient<StoreService>(provider => new StoreService(connection));
      }
  }
}