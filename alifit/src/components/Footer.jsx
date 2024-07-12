import '../styles/style.css'
import '../styles/utilities.css'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export default function Footer() {
// Footer uses Material UI for icons and links to the clients social media pages. //

    // The footer appears on all pages. See App.jsx //
    return(
<>
    <footer className="footer bg-secondary py-5">
        <div className="container grid grid-3">
            <div>
                <h1>AliFit.
                </h1>
                <p>Copyright &copy; 2024</p>
            </div>
            <nav>
                <ul>
                    <li><a href="/index">Home</a></li>
                    <li><a href="/testimonials">Testimonials</a></li>
                    <li><a href="/info">Info</a></li>
                </ul>
            </nav>
            <div className="social">
                <a href="https://x.com/home"><XIcon sx={{ fontSize: 40  }}/></a>
                <a href="https://www.facebook.com/alison.stewartlord?mibextid=LQQJ4d"><FacebookIcon sx={{ fontSize: 40  }}/></a>
                <a href="https://www.instagram.com/alisonstewartlord/?igsh=MWZ6emZrZjFkbzgxMA%3D%3D"><InstagramIcon sx={{ fontSize: 40  }}/></a>
                <a href="https://www.myfitnesspal.com/"><FitnessCenterIcon sx={{ fontSize: 40  }}/></a>
            </div>
        </div>
    </footer>

</>
        
)  }