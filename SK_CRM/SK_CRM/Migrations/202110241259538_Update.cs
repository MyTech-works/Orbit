namespace SK_CRM.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Update : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.EmployeeMenus",
                c => new
                    {
                        MenuId = c.Long(nullable: false, identity: true),
                        MenuName = c.String(nullable: false),
                        MainMenuId = c.Long(),
                        URLPath = c.String(),
                        OrderBy = c.Long(nullable: false),
                        IsNotActive = c.Boolean(nullable: false),
                        NotActiveDate = c.DateTime(),
                        CreatedDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(nullable: false),
                        IsDeleted = c.Boolean(nullable: false),
                        DeletedDate = c.DateTime(),
                        FontIcon = c.String(),
                        CreatedBy = c.String(),
                        ModifiedBy = c.String(),
                        DeletedBy = c.String(),
                    })
                .PrimaryKey(t => t.MenuId);
            
            CreateTable(
                "dbo.RBSRolePermissions",
                c => new
                    {
                        RefId = c.Long(nullable: false, identity: true),
                        RoleId = c.String(nullable: false),
                        MenuId = c.Long(nullable: false),
                        CreatedBy = c.String(),
                        CreatedDate = c.DateTime(nullable: false),
                        ModifiedBy = c.String(),
                        ModifiedDate = c.DateTime(nullable: false),
                        DeletedDate = c.DateTime(),
                        IsDeleted = c.Boolean(nullable: false),
                        DeletedBy = c.String(),
                        IsRead = c.Boolean(nullable: false),
                        IsAdd = c.Boolean(nullable: false),
                        IsEdit = c.Boolean(nullable: false),
                        IsDelete = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.RefId);
            
            CreateTable(
                "dbo.RBSUserPermissions",
                c => new
                    {
                        RefId = c.Long(nullable: false, identity: true),
                        UserId = c.String(nullable: false),
                        MenuId = c.Long(nullable: false),
                        CreatedBy = c.String(),
                        CreatedDate = c.DateTime(nullable: false),
                        ModifiedBy = c.String(),
                        ModifiedDate = c.DateTime(nullable: false),
                        DeletedDate = c.DateTime(),
                        IsDeleted = c.Boolean(nullable: false),
                        DeletedBy = c.String(),
                        IsRead = c.Boolean(nullable: false),
                        IsAdd = c.Boolean(nullable: false),
                        IsEdit = c.Boolean(nullable: false),
                        IsDelete = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.RefId);
            
            AddColumn("dbo.[SK.QuotationDetails]", "QuotationPath", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.[SK.QuotationDetails]", "QuotationPath");
            DropTable("dbo.RBSUserPermissions");
            DropTable("dbo.RBSRolePermissions");
            DropTable("dbo.EmployeeMenus");
        }
    }
}
