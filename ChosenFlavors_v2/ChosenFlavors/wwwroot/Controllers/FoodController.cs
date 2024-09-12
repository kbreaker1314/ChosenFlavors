using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChosenFlavorController
{
    public class FoodController : Controller
    {
        public IActionResult Index()
        {
            return Content("No food");
        }

        public IActionResult Show(int id)
        {
            
        }
    }
}
