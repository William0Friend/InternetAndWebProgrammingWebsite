using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SkeletonsHW4.Startup))]
namespace SkeletonsHW4
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
