import '../styles/style.css'
import '../styles/utilities.css'

export default function TestimonialCard(props){

return (
<>            

    <div className="card flex" style={{minWidth:"350px"}} >

             <img src={props.image1} alt="" style={{width:"180px", height:"210px"}}/>

        <div style={{position:"relative", display:"flex", flexDirection:"column", justifyContent:"flex-start",top:0, left:"10px", }}>
            <h3 style={{fontWeight:"bolder"}}>{props.name}</h3> 
            <p>{props.testimonial}</p>
        </div>
    </div>
</>
)  }