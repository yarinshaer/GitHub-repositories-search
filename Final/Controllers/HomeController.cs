using Final.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace Final.Controllers
{

    public class HomeController : Controller
    {

        List<Bookmark> list;

        public ActionResult Index()
        {
           
            return View();
        }

        public List<Bookmark> Post(Bookmark bookmark)
        {
            // add list bookmark 
            if (Session["BM"]!=null)
            {
                list = (List<Bookmark>)Session["BM"];
            }
            else
            {
                list = new List<Bookmark>();
            }
            list.Add(bookmark);
            Session["BM"] = list;
            return list;
        }

        public ActionResult Bookmarked()
        {
            //return list to view Bookmarked
            List<Bookmark> list = (List<Bookmark>)Session["BM"];
            return View(list);
        }


    }
}