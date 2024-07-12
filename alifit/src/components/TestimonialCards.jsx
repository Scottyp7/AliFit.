import '../styles/style.css'
import '../styles/utilities.css'

export default function TestimonialCard(props){
    
    // Function to pass the data to the return statement via props. //
    const paragraphs = props.testimonial.map((text,index) => {
        return <p key={index}>{text}</p>
    })

return (
<>            

    <div className="card grid" style={{minWidth:"350px"}} >
            <div className='flex'>
                <img src={props.image1} alt="" style={{width:"350px", height:"350px", }}/>
            </div>
            <div>
                <h1 className='flex' style={{fontWeight:"bolder"}}>{props.name}</h1> 
                <p>{paragraphs}</p>
            </div>
    </div>
</>
)  }