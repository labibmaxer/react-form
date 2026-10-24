import React, { useState } from 'react';

const Fastform = () => {
     
       const [password , setpassword] = useState('');
  const [error, seterror] = useState('')
     const handlechange =(e) =>{
        e.preventDefault()
        console.log("submitted ");
        
     }
     const handlepassword = (e) => {
        e.preventDefault()
           console.log(e.target.value);
           setpassword (e.target.value)
         if(password < 6){
            seterror('pass must be 6 charecter ')
         }
     }
     
    return (
        <div>
            <form action="" onSubmit={handlechange} >
            <input type="text" name='name' placeholder='enter name' />
            <br />
            <input type="email" name="mail" id="" placeholder='enter mail' required />
            <br />
            <input type="password" defaultValue={password} onChange={handlepassword} name="pass" id="" placeholder='enter pass' required/>
            <br />
            <input   type="submit" name='submit' value="submit" />
            /</form>
            <p>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default Fastform;