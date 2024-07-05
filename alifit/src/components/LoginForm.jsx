import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import emailjs from '@emailjs/browser'; // EmailJS is what sends the email on line 22

import '../styles/style.css';
import '../styles/utilities.css';



export default function LoginForm () {
  // State variables for the form
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneCode, setPhoneCode] = useState('+44');
    const navigate = useNavigate()
  
    const handleRequest = (e) => {
      e.preventDefault()
    // Emails the customer to let her know someone has completed the short form then posts the data into DB.
      emailjs.sendForm('service_y5o1xqt','template_bxlfc5d',e.target,'LZ8K-HrIA2RlK-G-Z')
      axios.post('http://localhost:8080/user/create',
        {firstName,email,phoneCode,phoneNumber})
          .then(response => {navigate(`/application?id=${response.data.data._id}`)})
          .catch(error => {
            console.error(error)
            alert("Unable to POST data.")
          } )
  
      console.log(`${firstName} has completed the form`);
      }


return (
<>
  <div className="showcase-form card">

    <h2>Request a Free Consultation</h2>

    <form onSubmit={handleRequest}>
      <div className="form-control">
          <input type="text" name="firstName" placeholder="First Name" required onChange={e => setFirstName(e.target.value)}></input>
      </div>

      <div className="form-control">
        <input type="tel" name="phoneNumber" placeholder="Mobile" required onChange={e => setPhoneNumber(e.target.value)}></input>
          <select className="country-btn" name="phoneCode" required onChange={e => setPhoneCode(e.target.value)}>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
              <option value="+355">+355</option>
              <option value="Other">Other</option>
          </select>
      </div>

      <div className="form-control">
          <input type="email" name="email" placeholder="Email" required onChange={e => setEmail(e.target.value)}></input>
      </div>

      <input type="submit" value="Submit" className="btn btn-dark"></input>
    </form>
  </div>
</>
    );
  };
  

