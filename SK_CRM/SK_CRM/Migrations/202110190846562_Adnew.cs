namespace SK_CRM.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Adnew : DbMigration
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
            
        }
        
        public override void Down()
        {
            DropTable("dbo.EmployeeMenus");
        }
    }
}
