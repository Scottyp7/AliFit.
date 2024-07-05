import '../styles/style.css'
import '../styles/utilities.css'
import TestimonialCard from '../components/TestimonialCards'
import { useState,useEffect } from 'react';


export default function Testimonials(){
    
    const [clients, setClients] = useState([]);    

    useEffect(() => { // 
        fetch('/client.json')
            .then((response) => response.json())
            .then((json) => { // json structure
            setClients(json) 
      })
    }, []);
    const itemDisplay = 6 /* Defines the number of items being displayed */
    let itemLayout = [1,2,1,2] /* Difines the number of elements on each line */
    let itemList = []
    let randomNum =  Math.floor(Math.random() * (clients.length - itemDisplay));
    const clientsSlice = clients.slice(randomNum,randomNum + itemDisplay)
    
    // ClassName is defined here to 
    for(const [index,itemsPerLine] of itemLayout.entries()){
        let className = "container flex"
        const clientsSplice = clientsSlice.splice(randomNum, randomNum + itemsPerLine)

        const clientList = clientsSplice.map(client => {
        return <TestimonialCard key={client.ID} name={client.name} image1={client.image1} testimonial={client.testimonial} />
    }  );
        itemList.push( <div key={index} className={className}>
                            {clientList}
                        </div> )
    }


    return (
<>
{/*Heading with Page Description */}
    <section className="features-head bg-primary py-3">
        <div className="container grid-3">
            <div>
                <h1 className="xl">Testimonials </h1>
                <p className="lead">
                    Take a look at some of my previous clients and their testimonials about their journy with AliFit. 
                </p>
            </div>
        </div>
    </section>


    {/* Sub Heading with Logo */}
    <section className="features-sub-head bg-light py-3">
        <div className="container grid-1">
            <div>
                <h1 className="md">AliFit | Bespoke Personal Training</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor cupiditate dignissimos temporibus perspiciatis quae! Suscipit qui, consectetur ea consequatur, doloribus repellendus quasi, aut corporis nam alias culpa. Nostrum, inventore accusantium!
                </p>
            </div>
            <img src="Logo.png" alt=""/>
        </div>
    </section>


{/* Cards with testimonials from the client.json file*/}
    <section className="features-main my-2">
        <div>{itemList}</div>
    </section>
</>
    )  }