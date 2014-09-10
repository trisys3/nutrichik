using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(nutritionchik.Startup))]
namespace nutritionchik
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
