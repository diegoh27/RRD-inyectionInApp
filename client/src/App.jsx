import "./App.css";
import Account from "./pages/Account/Account";
import Home from "./pages/Home/Home";
import MyOrders from "./pages/MyOrders/MyOrders";
import MyOrder from "./pages/MyOrder/MyOrder";
import NotFound from "./pages/NotFound/NotFound";
import Signin from "./pages/Signin/Signin";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes, useRoutes, BrowserRouter } from "react-router-dom";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/myOrder",
      element: <MyOrder />,
    },
    {
      path: "/myOrders",
      element: <MyOrders />,
    },
    {
      path: "/account",
      element: <Account />,
    },
  ]);
  return routes;
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
