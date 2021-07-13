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

    component: TemplateScreen,
    layout: "/admin",
  },
];

export default dashboardRoutes;
