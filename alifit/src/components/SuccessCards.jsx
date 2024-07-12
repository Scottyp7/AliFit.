import '../styles/style.css'
import '../styles/utilities.css';

export default function SuccessCard(props){

    // Success card values passed to it through props. See "Index.jsx" //
return (
<>    
    <div className="success card">
        <h2 className="card-heading">{props.name}</h2>
        <div>
            <a href="/testimonials">
                <img src={props.image} alt="" width="350px" height="405px"/></a>
            </div>
    </div>
</>
)  }