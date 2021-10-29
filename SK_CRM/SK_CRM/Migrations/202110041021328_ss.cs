namespace SK_CRM.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ss : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.[SK.CodeMaster]",
                c => new
                    {
                        CodemasterId = c.Long(nullable: false, identity: true),
                        TypevalueRefId = c.Long(nullable: false),
                        Type = c.String(nullable: false),
                        Typevalues = c.String(nullable: false),
                        OrderBy = c.Int(nullable: false),
                        IsActive = c.Boolean(nullable: false),
                        CreatedDate = c.DateTime(nullable: false),
                        BuyCount = c.Int(),
                        FreeCount = c.Int(),
                    })
                .PrimaryKey(t => t.CodemasterId);
            
            CreateTable(
                "dbo.[SK.CodePrefix]",
                c => new
                    {
                        PrefixRefId = c.Long(nullable: false, identity: true),
                        PrefixTypeId = c.Long(nullable: false),
                        SeriesPrefix = c.String(nullable: false),
                        IsActive = c.Boolean(nullable: false),
                        StartingNumber = c.Long(nullable: false),
                        EndingNumber = c.Long(nullable: false),
                        LastUsedNo = c.Long(nullable: false),
                        CreatedDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.PrefixRefId);
            
            CreateTable(
                "dbo.[SK.CompanyDetails]",
                c => new
                    {
                        CompanyId = c.Int(nullable: false, identity: true),
                        CompanyCode = c.String(nullable: false),
                        CompanyName = c.String(nullable: false),
                        Address = c.String(nullable: false),
                        Locality = c.String(nullable: false),
                        City = c.String(nullable: false),
                        Pincode = c.String(nullable: false),
                        Email = c.String(nullable: false),
                        AltEmail = c.String(),
                        ContactNumber = c.String(nullable: false),
                        AltContactNumber = c.String(),
                        Website = c.String(nullable: false),
                        TINNumber = c.String(),
                        GSTINNumber = c.String(),
                        QuotationHeader = c.String(),
                        CompanyLogo = c.String(),
                        Watermark = c.String(),
                        GSTDetectionPercentage = c.Decimal(nullable: false, precision: 18, scale: 2),
                        CreatedDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(nullable: false),
                        IsDeleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.CompanyId);
            
            CreateTable(
                "dbo.[SK.CustomerDetails]",
                c => new
                    {
                        CustomerId = c.Int(nullable: false, identity: true),
                        CustomerCode = c.String(nullable: false),
                        CustomerName = c.String(nullable: false),
                        CustomerEmail = c.String(nullable: false),
                        CustomerAddress = c.String(nullable: false),
                        Locality = c.String(nullable: false),
                        City = c.String(nullable: false),
                        Pincode = c.String(nullable: false),
                        Country = c.String(nullable: false),
                        ContactNumber = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.CustomerId);
            
            CreateTable(
                "dbo.MultipleFileUploads",
                c => new
                    {
                        FileUploadId = c.Long(nullable: false, identity: true),
                        RefId = c.Long(nullable: false),
                        Type = c.String(nullable: false),
                        ImagePath = c.String(nullable: false),
                        OrderBy = c.Long(nullable: false),
                        IsDeleted = c.Boolean(nullable: false),
                        FormName = c.String(),
                    })
                .PrimaryKey(t => t.FileUploadId);
            
            CreateTable(
                "dbo.[SK.ProductDetails]",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ProductCode = c.String(nullable: false),
                        ProductName = c.String(nullable: false),
                        Description = c.String(nullable: false),
                        ProductDescription = c.String(nullable: false),
                        UnitPrice = c.Decimal(nullable: false, precision: 18, scale: 2),
                        BalanceStockQty = c.Decimal(nullable: false, precision: 18, scale: 2),
                        IsNotActive = c.Boolean(nullable: false),
                        ProductImage = c.String(),
                        CreatedDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(nullable: false),
                        IsDeleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.QuotationProducts",
                c => new
                    {
                        RefId = c.Int(nullable: false, identity: true),
                        QuotationId = c.Int(nullable: false),
                        ProductId = c.Int(nullable: false),
                        Quantity = c.Decimal(nullable: false, precision: 18, scale: 2),
                        UnitPrice = c.Decimal(nullable: false, precision: 18, scale: 2),
                        TotalPrice = c.Decimal(nullable: false, precision: 18, scale: 2),
                    })
                .PrimaryKey(t => t.RefId);
            
            CreateTable(
                "dbo.[SK.QuotationDetails]",
                c => new
                    {
                        QuotationId = c.Int(nullable: false, identity: true),
                        QuotationNo = c.String(nullable: false),
                        QuotationDate = c.DateTime(nullable: false),
                        QuotationDueDate = c.DateTime(nullable: false),
                        BilledByCompanyId = c.Int(nullable: false),
                        BilledToCustomerId = c.Int(nullable: false),
                        RefPersonId = c.Int(),
                        CreateDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.QuotationId);
            
            CreateTable(
                "dbo.AspNetRoles",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name, unique: true, name: "RoleNameIndex");
            
            CreateTable(
                "dbo.AspNetUserRoles",
                c => new
                    {
                        UserId = c.String(nullable: false, maxLength: 128),
                        RoleId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.UserId, t.RoleId })
                .ForeignKey("dbo.AspNetRoles", t => t.RoleId, cascadeDelete: true)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId)
                .Index(t => t.RoleId);
            
            CreateTable(
                "dbo.tempFileUploads",
                c => new
                    {
                        RefId = c.Long(nullable: false, identity: true),
                        Base64String = c.String(),
                        Guid = c.String(),
                        CreatedDate = c.DateTime(nullable: false),
                        FormName = c.String(),
                        Type = c.String(),
                    })
                .PrimaryKey(t => t.RefId);
            
            CreateTable(
                "dbo.tempQuotationProducts",
                c => new
                    {
                        RefId = c.Int(nullable: false, identity: true),
                        QuotationProductId = c.Int(nullable: false),
                        Guid = c.String(),
                        productId = c.Int(nullable: false),
                        Quantity = c.Decimal(nullable: false, precision: 18, scale: 2),
                        UnitPrice = c.Decimal(nullable: false, precision: 18, scale: 2),
                        TotalPrice = c.Decimal(nullable: false, precision: 18, scale: 2),
                        IsDeleted = c.Boolean(nullable: false),
                        CreatedDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.RefId);
            
            CreateTable(
                "dbo.AspNetUsers",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Email = c.String(maxLength: 256),
                        EmailConfirmed = c.Boolean(nullable: false),
                        PasswordHash = c.String(),
                        SecurityStamp = c.String(),
                        PhoneNumber = c.String(),
                        PhoneNumberConfirmed = c.Boolean(nullable: false),
                        TwoFactorEnabled = c.Boolean(nullable: false),
                        LockoutEndDateUtc = c.DateTime(),
                        LockoutEnabled = c.Boolean(nullable: false),
                        AccessFailedCount = c.Int(nullable: false),
                        UserName = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.UserName, unique: true, name: "UserNameIndex");
            
            CreateTable(
                "dbo.AspNetUserClaims",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.String(nullable: false, maxLength: 128),
                        ClaimType = c.String(),
                        ClaimValue = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.AspNetUserLogins",
                c => new
                    {
                        LoginProvider = c.String(nullable: false, maxLength: 128),
                        ProviderKey = c.String(nullable: false, maxLength: 128),
                        UserId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.LoginProvider, t.ProviderKey, t.UserId })
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AspNetUserRoles", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserLogins", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserRoles", "RoleId", "dbo.AspNetRoles");
            DropIndex("dbo.AspNetUserLogins", new[] { "UserId" });
            DropIndex("dbo.AspNetUserClaims", new[] { "UserId" });
            DropIndex("dbo.AspNetUsers", "UserNameIndex");
            DropIndex("dbo.AspNetUserRoles", new[] { "RoleId" });
            DropIndex("dbo.AspNetUserRoles", new[] { "UserId" });
            DropIndex("dbo.AspNetRoles", "RoleNameIndex");
            DropTable("dbo.AspNetUserLogins");
            DropTable("dbo.AspNetUserClaims");
            DropTable("dbo.AspNetUsers");
            DropTable("dbo.tempQuotationProducts");
            DropTable("dbo.tempFileUploads");
            DropTable("dbo.AspNetUserRoles");
            DropTable("dbo.AspNetRoles");
            DropTable("dbo.[SK.QuotationDetails]");
            DropTable("dbo.QuotationProducts");
            DropTable("dbo.[SK.ProductDetails]");
            DropTable("dbo.MultipleFileUploads");
            DropTable("dbo.[SK.CustomerDetails]");
            DropTable("dbo.[SK.CompanyDetails]");
            DropTable("dbo.[SK.CodePrefix]");
            DropTable("dbo.[SK.CodeMaster]");
        }
    }
}
