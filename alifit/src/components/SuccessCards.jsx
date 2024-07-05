import '../styles/style.css'
import '../styles/utilities.css';



export default function SuccessCard(props){


return (
<>    
    <div className="card">
        <h2 className="card-heading">{props.name}</h2>
        <a href="/testimonials">
            <img    src={props.image}
                    alt="" width="125px" height="375px"/></a>
    </div>
</>
)  }