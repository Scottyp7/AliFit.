import { Route, Routes } from "react-router-dom"
import Index from "../pages"
import Testimonials from "../pages/testimonials"
import Info from "../pages/info"
import Application from "../pages/application"
import Admin from "../pages/admin"
import Workouts from "../pages/workouts"

export default function AppRoutes(props){


return (

<Routes>


    <Route path="/" element={<Index/>}/> 
    <Route path="testimonials" element={<Testimonials/>}/> 
    <Route path="info" element={<Info/>}/> 
    <Route path="application" element={<Application/>}/>
    <Route path="admin" element={<Admin/>}/>
    <Route path="logs" element={<Workouts/>}/>

</Routes>

)  } 