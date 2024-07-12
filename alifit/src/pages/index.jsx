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
            <div className="showcase-text ">
                <h2>Are you ready to put yourself first? </h2>
                <p>Take a look at some of my previous clients using the button below.</p>
                <a href="/testimonials" className="btn btn-dark">Read More</a>
            </div> 
            <LoginForm/>
        </div>
    </section>

{/* Success stories displayed as Cards with links */}
<section className="success">
        <h2 className="md text-center" style={{marginTop:"80px"}}>
            Success Stories...
        </h2>
        <div className="container flex ">
            {clientList}
        </div>
    </section>


{/* Info to divide the page */}
    <section className="info bg-primary my-2 py-2">
        <div className="container flex">
            <div className="text-center">
                <h2 className="lg">Flexible</h2>
                <p className="lead">Training and Diet plans to suit your lifestyle</p>
                <a href="/info" className="btn btn-dark my-1">Read More</a>
            </div>   
            <div className="infoImg flex" style={{width:"450px", padding:"20px"}}>             
                <img  src="gym1.jpeg" alt="" />
            </div>
        </div>
    </section>

{/* Heading with Icons and Figures */}
<section className="stats">
        <div className="container">
            <h3 className="stats-heading">
                Personal, Dedicated and Flexible. Each plan designed specifically to fit your needs and lifestyle. 
            </h3>
            <Stats/>
        </div>
    </section>

    {/* About Alison with picture */}
    <section className="info bg-primary  py-3">
        <div className="container flex">
            <div className="text-center p-1">
                <h2 className="lg">About me</h2>
                <h4 className="lead">I'm a PT from Dublin, Ireland who currently lives in Australia.</h4>
                <h4 className="lead"> I absolutely love what i do and making people feel body confident is my passion. </h4>
                <a href="/info" className="btn btn-dark my-1">Read More</a>
            </div>
            <div className="aliImg flex" style={{width:"450px", height:"500px"}}>                
                <img src="allison1.jpeg" alt="" />
            </div>
        </div>
    </section>

</>
    )
}