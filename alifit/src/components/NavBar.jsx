import '../styles/style.css'
import '../styles/utilities.css'

export default function NavBar(){
// The navbar appears on all pages by default. (See App.jsx)
    return(
    <>
        <div className="navbar" >
            <div className="container flex grid-2 align-small">
                 <h1 className="logo"><a href="/">AliFit.</a></h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/testimonials">Testimonials</a></li>                        
                        <li><a href="/info">Info</a></li>
                    </ul>
                </nav>
            </div>             
    
        </div>
    </>
)  }