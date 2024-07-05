import { useState,useEffect } from 'react';
import { useNavigate,useSearchParams } from 'react-router-dom';
import axios from 'axios';
import emailjs from '@emailjs/browser'; // EmailJS is what sends the email on line 29

import '../styles/style.css';
import '../styles/utilities.css';


export default function ApplicationForm() {
  // State variables for the form
    const [lastName, setLastName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startWeight, setStartWeight] = useState('');
    const [shortGoal, setShortGoal] = useState('');
    const [longGoal, setLongGoal] = useState('');
    const [startHeight, setStartHeight] = useState ('');
    const [age, setAge] = useState ('');
    const [submitState, setSubmitState] = useState(false);

    const [searchParams, setSearchParamas] = useSearchParams();
    const [firstName, setFirstName] = useState(null);;
    const [email, setEmail] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [phoneCode, setPhoneCode] = useState(null);
    console.log(phoneCode);
  
    // Gets the user that submittd the short form.
    const getUser = () => {
      axios.get(`http://localhost:8080/user/users/${searchParams.get('id')}`)
        .then(response => {
            setFirstName(response.data.data.firstName);
            setEmail(response.data.data.email);
            setPhoneNumber(response.data.data.phoneNumber);
            setPhoneCode(response.data.data.phoneCode);
        } )
        .catch(error => {
          console.error(error)          
          alert("Unable to GET data. Please refresh the page and try again.")
        } );
    } // Use effect makes sure the function is only called once. 
    useEffect(getUser,[]);

    const handleRequest = (e) => {
      e.preventDefault();
      // sends an email to the customer informing them that someone has signed up. 
      emailjs.sendForm('service_y5o1xqt','template_mopj80l',e.target,'LZ8K-HrIA2RlK-G-Z')
      //Finds the user that was created from the short for and updates the details in the database. 
    axios.put(`http://localhost:8080/user/${searchParams.get('id')}`,
      {firstName,lastName,age,email,phoneCode,phoneNumber,shortGoal,longGoal,startHeight,startWeight})
        .then(response => {setSubmitState(true)})
        .catch(error => {
          console.error(error)
          alert('Unable to POST data. Please check for duplicate data. ')
      } );

    console.log(`${firstName} has completed the form`);
    };
    if(firstName === null ) {
      return <h1>Loading...</h1>
    };
  
// The form is an If statement which changes what is displayed once the user has clicked submit. 
return (
<>
  {submitState ? <div><h1>Thank you for completing the form</h1></div> :
  
  
  <div className="application-form card ">

    <h2>Thank you for your request</h2>
    <h4>Please fill out the form and i will be in touch with the next steps ASAP.</h4>

    <form onSubmit={handleRequest}>
      <div className="form-control grid grid-2">
          <input type="text" name="firstName" placeholder=" First Name" value={firstName} required onChange={e => setFirstName(e.target.value)}></input>
          <input type="text" name="lastName" placeholder=" Last Name" value={lastName} required onChange={e => setLastName(e.target.value)}></input>
      </div>

      <div className="form-control">
        <input type="tel" name="phoneNumber" placeholder="Mobile" value={phoneNumber}required onChange={e => setPhoneNumber(e.target.value)}></input>
          <select className="app-country-btn" name="phoneCode" value={phoneCode} required onChange={e => setPhoneCode(e.target.value)}>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
              <option value="+355">+355</option>
              <option value="">Other</option>
          </select>
      </div>


      <div className="form-control grid">
          <input type="email" name="email" placeholder="Email" value={email} required onChange={e => setEmail(e.target.value)}></input>
          <input type="text" name="startDate" placeholder='Start Date' value={startDate} required onChange={e => setStartDate(e.target.value)}></input>
      </div>

      <div className="form-control grid grid-4">
          <label>Current Weight (kg)</label>
          <input type="text" name="startWeight" placeholder="(kg)" value={startWeight} required onChange={e => setStartWeight(e.target.value)}></input>
          <label>Current Height (cm)</label>
          <input type="text" name="startHeight" placeholder='(cm)' value={startHeight} required onChange={e => setStartHeight(e.target.value)}></input>
          <label>Short Term Goal</label>
          <input type="text" name="shortGoal" placeholder='' value={shortGoal} required onChange={e => setShortGoal(e.target.value)}></input>
          <label>Long Term Goal</label>
          <input type="text" name="longGoal" placeholder='' value={longGoal} required onChange={e => setLongGoal(e.target.value)}></input>
      </div>

      <div className="form-control grid">
        <input type="text" name="age" placeholder='Age' value={age} required onChange={e => setAge(e.target.value)}></input>
        <input type="submit" value="Submit" className="appbtn btn-dark"></input>
      </div>

    </form>  
  </div> 
};

</>
    );
  };
  

