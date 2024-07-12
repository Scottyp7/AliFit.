import { useState,useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

import '../styles/style.css';
import '../styles/utilities.css';

// Styles for buttons and boxes//
  const formStyle = {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  };

  const inputStyle = {
    display: 'flex',
    margin: '10px 0px',
    padding: '10px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4c75f1',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width:"200px",
    display: 'block',
    margin: 'auto'
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const listItemStyle = {
    padding: '10px',
    borderBottom: '1px solid #ccc',
  };

export default function Admin() {

    // State Management //
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchResult, setSearchResult] = useState([])
    const [search, setSearch] = useState(searchParams.get('firstName') || '' )

    const [deleteID, setDeleteID] = useState('')

    const [updateOption, setUpdateOption] = useState('firstName')
    const [updateValue, setUpdateValue] = useState('')
    const [updateID, setUpdateID] = useState('')

    // Returns any results that match the value in the text box.//

function getData() {
    if (search) {
        //Search uses "startsWith()" //
    axios.get(`http://localhost:8080/user/usersbyfirstname/${search}`)
        .then(response => {
            setSearchResult(response.data.data);
    } )
    .catch(error => {
      console.error(error)          
      alert("Unable to GET data. Please refresh the page and try again.")
    } );
    }
 };
     useEffect(getData,[searchParams]);

    // Displays the results from the "axios.get" command //
    const displayResult = searchResult.map(client => {
        return (
        <div style={listItemStyle} key={client._id}>
            <h2>{client._id}</h2>
            <h2>{client.firstName}</h2>
            <h2>{client.lastName}</h2>
            <h2>{client.age}</h2>
            <h2>{client.email}</h2>
        </div>
    ) }  );


    // Once the search has be ran, copy and paste the userID into the delete text box to remove that user //
function deleteByID() {

    axios.delete(`http://localhost:8080/user/${deleteID}`)
        .then(response => {
            console.log(`User: ${deleteID} was removed from the database`)
            getData()

    } )
    .catch(error => {
        console.error(error)          
        alert("Unable to delete user. Please try again.")
    }  )  } ;

/* Update Field In DataBase */ 
function updateByID() {

    axios.put(`http://localhost:8080/user/${updateID}`,{field:updateOption,updatedValue:updateValue})
        .then(response => {
            const filteredUsers = searchResult.filter(user => user._id === updateID)
            filteredUsers[0][updateOption] = updateValue
            setSearchResult(filteredUsers)
            console.log(`User: ${updateID} has been updated.`)

    } )
    .catch(error => {
        console.error(error)          
        alert("Unable to delete user. Please try again.")
    }  )  } ;


// Functions that are called when the forms are submitted. //
function handleSubmit(e){
    e.preventDefault();
    setSearchParams({firstName:search})
}

function handleDelete(e){
    e.preventDefault();
    deleteByID()
}

function handleUpdate(e){
    e.preventDefault();
    updateByID()
}

// This show what is dispayed on the page. //
  return (
    <div>
        <div className='grid'>
            <form onSubmit={handleSubmit} style={formStyle}>
                <h3>Find Users</h3>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} style={inputStyle}/>
                    <button type="submit" style={buttonStyle}>Submit Query</button>                
                </div>
            </form>

            <form onSubmit={handleDelete} style={formStyle}>
                <h3>Delete User</h3>
                <div>
                    <label>ID :</label>
                    <input type="text" value={deleteID} onChange={(e) => setDeleteID(e.target.value)} style={inputStyle}/>
                    <button type="submit" style={buttonStyle}>Delete</button>
                </div>

            </form>

            <form onSubmit={handleUpdate} style={formStyle}>
                <div>
                    <label>Update User:</label>
                <div>
                    <label>User ID:</label>
                    <input type="select" value={updateID} onChange={(e) => setUpdateID(e.target.value)} style={inputStyle}/>
                </div>
                <div>
                    <select value={updateOption} onChange={(e) => setUpdateOption(e.target.value)}>     
                        <option value="firstName">First Name</option>
                        <option value="lastName">Last Name</option>
                        <option value="age">Age</option>
                        <option value="email">Email</option>
                    </select>
                </div>
                <div>
                    <label>Updated Value:</label>
                    <input type="select" value={updateValue} onChange={(e) => setUpdateValue(e.target.value)} style={inputStyle}/>
                </div>
                    <button type="submit" style={buttonStyle}>Update</button>   
                </div>
            </form>
        </div>

      <h2>Results:</h2>
      <ul style={listStyle}>
         {displayResult}
      </ul>
    </div>
  );
};


