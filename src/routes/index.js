import Qu from "../views/Qu/Qu";
import Account from "../views/Account/Account";
import Login from "../views/Login/Login";

const indexRoutes = [
  {
    path: "/",
    name: "Qu",
    component: Qu
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/account",
    name: "Account",
    component: Account
  }
];

export default indexRoutes;
