using DocumentFormat.OpenXml.Packaging;
using Google.Apis.Auth.OAuth2;
using OpenXmlPowerTools;
using SK_CRM.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Xml.Linq;

namespace SK_CRM.Services
{
    public class EmailTrigger: Controller
    {
        private readonly string fromAdd = "support@orbitmachines.in";
        private readonly string Password = "Travel#123";
        private readonly string _host = "relay-hosting.secureserver.net";
        private readonly int _port = 25;
        private readonly bool _EnableSsl = false;
        private readonly bool _useDefaultCredentials = false;
        private readonly ApplicationDbContext db = new ApplicationDbContext();
        private readonly CommonServices _commonServices = new CommonServices();

        public bool SignUpVerificationCode(string EmailId, string UserName, int BigshoprOTP)
        {
            try
            {
                var fromAddress = new MailAddress(fromAdd);
                var toAddress = new MailAddress(EmailId, UserName);
                string fromPassword = Password;
                const string subject = "Orbit - Signup verification";

                string message = System.IO.File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + "assets\\mail-templates\\bigshopr-signup.config");
                message = message.Replace("{UserName}", UserName);
                message = message.Replace("{BigshoprOTP}", BigshoprOTP.ToString());

                var smtp = new SmtpClient
                {
                    Host = _host,
                    Port = _port,
                    EnableSsl = _EnableSsl,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    UseDefaultCredentials = _useDefaultCredentials,
                    Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
                };
                using (var content = new MailMessage(fromAddress, toAddress)
                {
                    Subject = subject,
                    Body = message,
                    IsBodyHtml = true
                })
                {
                    smtp.Send(content);
                }

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool ResetYourPassword(string EmailId, string UserName, string callbackUrl)
        {
            try
            {
                var fromAddress = new MailAddress(fromAdd);
                var toAddress = new MailAddress(EmailId, UserName);
                string fromPassword = Password;
                const string subject = "Orbit - Reset Your Password";

                string message = System.IO.File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + "assets\\mail-templates\\orbit-restpassword.config");
                message = message.Replace("{UserName}", UserName);
                message = message.Replace("{callbackUrl}", callbackUrl);

                var smtp = new SmtpClient
                {
                    Host = _host,
                    Port = _port,
                    EnableSsl = _EnableSsl,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    UseDefaultCredentials = _useDefaultCredentials,
                    Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
                };
                using (var content = new MailMessage(fromAddress, toAddress)
                {
                    Subject = subject,
                    Body = message,
                    IsBodyHtml = true
                })
                {
                    smtp.Send(content);
                }
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool SendQuotationtoCustomer(int quotationId)
        {
            try
            {
                Quotation quotation = db.Quotations.Find(quotationId);
                customer customer = db.customerDetails.Find(quotation.BilledToCustomerId);
                MailMessage mail = new MailMessage();
                var fromAddress = new MailAddress(fromAdd);
                var toAddress = new MailAddress(customer.CustomerEmail, customer.CustomerName);

                //byte[] byteArray = System.IO.File.ReadAllBytes(DocxFilePath);
                //using (MemoryStream memoryStream = new MemoryStream())
                //{
                //    memoryStream.Write(byteArray, 0, byteArray.Length);
                //    using (WordprocessingDocument doc = WordprocessingDocument.Open(memoryStream, true))
                //    {
                //        HtmlConverterSettings settings = new HtmlConverterSettings()
                //        {
                //            PageTitle = "My Page Title"
                //        };
                //        XElement html = HtmlConverter.ConvertToHtml(doc, settings);

                //        System.IO.File.WriteAllText(HTMLFilePath, html.ToStringNewLineOnAttributes());
                //    }
                //}


                const string subject = "Orbit - Quotation";

                string message = System.IO.File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + "assets\\mail-templates\\orbit-restpassword.config");
                //message = message.Replace("{UserName}", UserName);
                //message = message.Replace("{callbackUrl}", callbackUrl);

                var smtp = new SmtpClient
                {
                    Host = _host,
                    Port = _port,
                    EnableSsl = _EnableSsl,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    UseDefaultCredentials = _useDefaultCredentials,
                    Credentials = new NetworkCredential(fromAddress.Address, Password)
                };
                using (var content = new MailMessage(fromAddress, toAddress)
                {
                    Subject = subject,
                    Body = message,
                    IsBodyHtml = false
                })
                {
                    content.Attachments.Add(new Attachment(Server.MapPath(quotation.QuotationPath)));
                    smtp.Send(content);
                }
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}