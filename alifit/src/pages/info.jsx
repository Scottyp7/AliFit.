import { useState } from "react";
import About from "../components/About";
import MealPlans from "../components/MealPlans";
import Plans from "../components/Plans"
import Tracking from "../components/Tracking"
import LoginForm from "../components/LoginForm";

export default function Info(){

// state management //
    const [displayState, setDisplayState] = useState('about')

    return (
<>
{/* Heading */}
<section className="features-head bg-primary">
        <div className="container grid-3">
            <div className="flex">
                <h1 className="md">Info, Meals and Training</h1>
            </div>    
            <div className="flex">
                <p>Acheive your goals with AliFit.</p> 
            </div>   

            
        </div>
    </section>
{/* Nav bar which uses an if statement to change the state of which component to load. */}
    <nav>
        <div className="info infonav">
                <ul className="flex">
                    <li className="p-1" onClick={e => setDisplayState('about')}>About</li>
                    <li className="p-1" onClick={e => setDisplayState('meals')}>Meal Plans</li>
                    <li className=" p-1" onClick={e => setDisplayState('plans')}>Training Plans</li>
                    <li className="p-1" onClick={e => setDisplayState('food')}>Tracking</li>
                    <li className="p-1" onClick={e => setDisplayState('form')}>Sign Up!</li>
                </ul>
        </div>
    </nav>
{/* If statement showing which components are loaded. */}
    <div className="grid-2 flex p-1">
        <div className="card flex">    
            {displayState === 'about' ? <About/> : 
            displayState === 'meals' ? <MealPlans/> : 
            displayState === 'plans' ? <Plans/> : 
            displayState === 'form' ? <LoginForm extraClasses={["infoForm"]}/> : 
            displayState === 'food' ? <Tracking/> : null}
        </div>
        <div className="flex my-3" style={{width:"300px", height:"500px", justifyContent:"center", }}>
            <img src="allison1.jpeg" alt=""/>
        </div>
    </div>
</>

)  }