/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import TemplateScreen from "views/TemplateScreen";

const dashboardRoutes = [

  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Login",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
 
 
  {
    path: "/sendmail",
    name: "Email Template",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin",
  },

  {
    path: "/templetes",
    name: "Previous Templates",
    icon: "nc-icon nc-atom",
    component: Notifications,
    layout: "/admin",
  },


  {
    path: "/template/:id",
    icon: "nc-icon nc-atom",
    name:"Temp Screen",
    component: TemplateScreen,
    layout: "/admin",
  },
  
  
];

export default dashboardRoutes;
