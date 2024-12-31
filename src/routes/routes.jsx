import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../MainLayouts/MainLayouts";
import Home from "../Pages/Home/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>
    },
    
    
  ]);