import { useState,useEffect } from "react";

import LoginForm from "../components/LoginForm";
import Stats from "../components/Stats";
import SuccessCard from "../components/SuccessCards";

export default function Index(){
    // state variables to see what form
    const [clients, setClients] = useState([]);    

    useEffect(() => { // 
        fetch('/client.json')
            .then((response) => response.json())
            .then((json) => { // json structure
            setClients(json) 
      })
    }, []);
    // The Success cards are selected from a random number which is generated in the code below. 
    // As more clients are added to the json file, they are automatically added to the homepage at random. 
    let randomNum =  Math.floor(Math.random() * (clients.length - 3));
    const clientsSlice = clients.slice(randomNum,randomNum + 3)
    const clientList = clientsSlice.map(client => {
        return <SuccessCard key={client.ID} name={client.name} image={client.image1} />
    }  );


    return(
<>      
{/* Showcase with Login Form */}
    <section className="showcase">
        <div className="container grid">
            <div className="showcase-text">
                <h2>Are you ready to put yourself first? </h2>
                <p>Take a look at some of my previous clients using the button below.</p>
                <a href="/testimonials" className="btn btn-dark">Read More</a>
            </div> 
            <LoginForm/>
        </div>
    </section>


{/* Heading with Icons and Figures */}
    <section className="stats">
        <div className="container">
            <h3 className="stats-heading text-center ">
                Personal, Dedicated and Flexible. Each plan designed specifically to fit your needs and lifestyle. 
            </h3>
            <Stats/>
        </div>
    </section>


{/* Info to divide the page */}
    <section className="info bg-primary my-2 py-2">
        <div className="container grid-1">
            <div className="text-center">
                <h2 className="lg">Flexible</h2>
                <p className="lead my-1">Training and Diet plans to suit your lifestyle</p>
                <a href="/testimonials" className="btn btn-dark">Read More</a>
            </div>
            <img src="" alt=""/>
        </div>
    </section>

{/* Success stories displayed as Cards with links */}
    <section className="success">
        <h2 className="md text-center">
            Success Stories...
        </h2>
        <div className="container flex ">
            {clientList}
        </div>
    </section>
</>
    )
}