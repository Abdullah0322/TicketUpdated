import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import TemplateScreen from "views/TemplateScreen";
import UserTicketScreen from "components/Superview/UserScreen";
import Superview from "components/Superview/Superview";
import ShowTemplate from "views/ShowTemplate";
const dashboardRoutes = [
  {
    display: true,
    path: `/dashboard`,
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    display: true,
    path: `/main`,
    name: "Template",
    icon: "nc-icon nc-layers-3",
    component: ShowTemplate,
    layout: "/admin",
  },

  {
    display: true,
    path: "/sendmail",
    name: "Email Template",
    icon: "nc-icon nc-email-85",
    component: Icons,
    layout: "/admin",
  },

  {
    display: true,
    path: "/templetes",
    name: "Saved Templates",
    icon: "nc-icon nc-favourite-28",
    component: Notifications,
    layout: "/admin",
  },

  {  display: true,
    path: "/alltickets",
    name: "All Tickets",
    icon: "nc-icon nc-notes",
    component: Superview,
    layout: "/admin",
  },

  {
    path: "/template/:id",
    name:"rjhir",
    component: TemplateScreen,
    layout: "/admin",
  },

  {
    path: "/:id",

    component: UserTicketScreen,
    layout: "/admin",
  },
];

export default dashboardRoutes;
