import "./App.css";
import {useState} from "react";
import React from "react";

function App() {
 
 const [formData,setFormdata]=useState({
    firstName:"", lastName:"",
     email:"", country:"India", 
    streetAddress:"", city:"",
    state:"", postalCode:"", comments:false, candidates:false,
    offers:false, pushNotifications:""
 })

  function changeHandler(event){
    const{name, value, checked, type}=event.target;
    setFormdata((prev)=>({...prev, [name]:type==="checkbox" ? checked: value}))
  }


  function submitHandler(event){
    event.preventDefault();
    console.log("Preinting Value of Form Data:");
    console.log(formData);
  }

 return(
  
  <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
  <form onSubmit={submitHandler} className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
    <input 
      type="text"
      name="firstName"
      id="firstName"
      placeholder="Fname"
      value={formData.firstName}
      onChange={changeHandler}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
    />

    <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
    <input 
      type="text"
      name="lastName"
      id="lastName"
      placeholder="Lname"
      value={formData.lastName}
      onChange={changeHandler}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
    />

    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
    <input 
      type="email"
      name="email"
      id="email"
      placeholder="email"
      value={formData.email}
      onChange={changeHandler}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
    />

    <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">Country</label>
    <select 
      name="country" 
      id="country" 
      value={formData.country} 
      onChange={changeHandler}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
    >
      <option value="">India</option>
      <option value="">United States</option>
      <option value="">Canada</option>
      <option value="">Mexico</option>
    </select>

    <label htmlFor="streetAddress" className="block text-gray-700 text-sm font-bold mb-2">Street Address</label>
    <input 
      type="text"
      name="streetAddress"
      id="streetAddress"
      placeholder="street Address"
      value={formData.streetAddress}
      onChange={changeHandler}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
    />

    <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City</label>
    <input 
      type="text"
      name="city"
      id="city"
      placeholder="city"
      value={formData.city}
      onChange={changeHandler}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
    />

    <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">State/Province</label>
    <input 
      type="text"
      name="state"
      id="state"
      placeholder="state"
      value={formData.state}
      onChange={changeHandler}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
    />

    <label htmlFor="postalCode" className="block text-gray-700 text-sm font-bold mb-2">Postal Code</label>
    <input 
      type="text"
      name="postalCode"
      id="postalCode"
      placeholder="postal Code"
      value={formData.postalCode}
      onChange={changeHandler}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
    />

    <fieldset className="mb-6">
      <legend className="text-md font-semibold text-gray-700 mb-2">By Email</legend>
      <div className="flex items-start space-x-3 mb-2">
        <input type="checkbox" id="comments" name="comments" checked={formData.comments} onChange={changeHandler} />
        <div>
          <label htmlFor="comments" className="font-medium text-gray-700">Comments</label>
          <p className="text-sm text-gray-500">Get notified when someone posts a comment on a posting.</p>
        </div>
      </div>

      <div className="flex items-start space-x-3 mb-2">
        <input type="checkbox" id="candidates" name="candidates" checked={formData.candidates} onChange={changeHandler} />
        <div>
          <label htmlFor="candidates" className="font-medium text-gray-700">Candidates</label>
          <p className="text-sm text-gray-500">Get notified when a candidate applies for a job.</p>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <input type="checkbox" id="offers" name="offers" checked={formData.offers} onChange={changeHandler} />
        <div>
          <label htmlFor="offers" className="font-medium text-gray-700">Offers</label>
          <p className="text-sm text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
        </div>
      </div>
    </fieldset>

    <fieldset className="mb-6">
      <legend className="text-md font-semibold text-gray-700 mb-2">Push Notifications</legend>
      <p className="text-sm text-gray-500 mb-4">These are delivered via SMS to your mobile phone</p>

      <div className="mb-2">
        <input type="radio" id="pushEverything" name="pushNotifications" value="Everything" onChange={changeHandler} />
        <label htmlFor="pushEverything" className="ml-2 text-gray-700">Everything</label>
      </div>
      <div className="mb-2">
        <input type="radio" id="pushNothing" name="pushNotifications" value="No Push Notifications" onChange={changeHandler} />
        <label htmlFor="pushNothing" className="ml-2 text-gray-700">No Push Notifications</label>
      </div>
      <div>
        <input type="radio" id="pushEmail" name="pushNotifications" value="Same as email" onChange={changeHandler} />
        <label htmlFor="pushEmail" className="ml-2 text-gray-700">Same as Email</label>
      </div>
    </fieldset>

    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Save
    </button>
  </form>
</div>



 );
}

export default App;
