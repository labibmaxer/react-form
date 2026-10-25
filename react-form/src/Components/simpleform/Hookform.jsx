import React from 'react';
import Useinputfield from './Useinputfield';

const Hookform = () => {
    const [name , nameOnChange] = Useinputfield()
    const [email, emailOnchange]= Useinputfield()
       const handlehook = (e) => {
     e.preventDefault();
         console.log('submit', name, email);
         
       }
    return (
        <div>
            <form onSubmit={handlehook} >
                <input onChange={nameOnChange} type="text" placeholder='n'/>
                <br />
                <input onChange={emailOnchange} type="email" name="" id=""  placeholder='m'/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Hookform;