using System.Data.Entity;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace SK_CRM.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit https://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // Add custom user claims here
            return userIdentity;
        }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public DbSet<ProductDetails> productDetails { get; set; }
        public DbSet<MultipleFileUpload> fileUpload { get; set; }
        public DbSet<CodeMaster> codeMasters { get; set; }
        public DbSet<CodePrefix> codePrefixes { get; set; }
        public DbSet<tempFileUpload> tempFileUpload { get; set; }

        public DbSet<company> companyDetails { get; set; }
        public DbSet<customer> customerDetails { get; set; }

        public DbSet<Quotation> Quotations { get; set; }
        public DbSet<tempQuotationProducts> tempQuotationProducts { get; set; }
        public DbSet<QuotationProducts> quotationProducts { get; set; }
        public DbSet<EmployeeMenu> EmployeeMenus { get; set; }
        public DbSet<RBSRolePermission> RBSRolePermissions { get; set; }
        public DbSet<RBSUserPermission> RBSUserPermissions { get; set; }
    }
}