import { useState,useEffect } from "react"
import ApplicationForm from "../components/ApplicationForm"

export default function Application() {

    return (
<>
    <div className="container grid-4">
        <h2>Welcome to AliFit. </h2>
        <h4>Your journy starts here!</h4>

            <ApplicationForm/>             
             <img className="my-1" src="Logo.png" alt=""/>      
        <section className="stats">
            <div className="container">
        </div>
    </section>


    </div>
</>


    ) }