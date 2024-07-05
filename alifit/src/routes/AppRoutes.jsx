import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Index from "../pages"
import Testimonials from "../pages/testimonials"
import Nutrition from "../pages/nutrition"
import Info from "../pages/info"
import Application from "../pages/application"


export default function AppRoutes(props){


return (

<Routes>

    <Route path="index" element={<Index/>}/> 
    <Route path="testimonials" element={<Testimonials/>}/> 
    <Route path="nutrition" element={<Nutrition/>}/> 
    <Route path="info" element={<Info/>}/> 
    <Route path="application" element={<Application/>}/>

</Routes>

)  } 