using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RhysTechTest.Controllers
{
    public class HomeController : Controller
    {
        TechTestEntities techTestDataBase = new TechTestEntities();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetAllPeople()
        {
            var techTestDataBase = new TechTestEntities();
            var peoplesData = techTestDataBase.People.Select(p => new { p.PersonId, p.FirstName, p.LastName, p.IsAuthorised, Colours = p.Colours.Select(c => c.Name), p.IsEnabled }).ToList();
            return Json(peoplesData, JsonRequestBehavior.AllowGet);
        }
        
        public ActionResult GetPersonById(int PersonId)
        {
            var specificPerson = techTestDataBase.People.Where(f => f.PersonId == PersonId).First();

            return Json(new { specificPerson = specificPerson}, JsonRequestBehavior.AllowGet);
        }
        
        public ActionResult UpdatePerson(People newDetails)
        {
            {
                techTestDataBase.People.Attach(newDetails);
                techTestDataBase.Entry(newDetails).State = System.Data.Entity.EntityState.Modified;
                techTestDataBase.SaveChanges();

                return Json(new { status = "Person was updated!" });
            }
        }
    }
}