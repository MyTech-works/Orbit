namespace SK_CRM.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddRBS : DbMigration
    {
        public override void Up()
        {
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
            
        }
        
        public override void Down()
        {
            DropTable("dbo.RBSUserPermissions");
            DropTable("dbo.RBSRolePermissions");
        }
    }
}
