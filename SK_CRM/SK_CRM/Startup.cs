using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SK_CRM.Startup))]
namespace SK_CRM
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
