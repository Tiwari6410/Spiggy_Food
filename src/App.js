import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
// import SHeader from "./SComponent/SHeader";
// import SBody from "./SComponent/SBody";
import Header from "./Component/Header";
import Body from "./Component/Body";
import "../index.css";
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import About from "./Component/About";
import Error from "./Component/Error";
import RestaurantMenu from "./Component/RestaurantMenu";
// import Random from "./Component/Random.jsx"
import { Provider } from "react-redux";
import appStore from "./Component/Utils/appStore";
import Cart from "./Component/Cart.jsx";
// import Contact from "./Component/Contact.jsx"
// import Grocery from "./Component/Grocery.jsx";

const AppLayout = () => {
  return (
//here we are providing redux store globally
    <Provider store={appStore}> 
       <div className="app">
      {/* <SHeader/>
      <SBody /> */}
      <Header />
      <Outlet/>
      {/* <Random/> */}
    </div>
    </Provider>

  );
};

const Contact = lazy(()=>import ("./Component/Contact.jsx"))
const Grocery = lazy(()=> import ("./Component/Grocery.jsx"))

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
    {
      path:"/",
      element:<Body/>,
    },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Suspense fallback={<h1> Loading......</h1>}> <Contact/> </Suspense>,
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1> Loading......</h1>}> <Grocery/> </Suspense>,
      },
      {
        path:"/restaurantmenu/:resId",
        element:<RestaurantMenu/>,
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement:<Error/>,
},
])

// const AppLayout = React.createElement("h1",{id:"superman"}z,"Hello world")

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)