import React from 'react';

const Simplefor = () => {
    const handleSubmit = (e) => {
       e.preventDefault();
        console.log(e.target.name.value);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
              <input name='name' type="text" />
              <br />
              <input name='submit' type="submit" value="submit" />
                
            </form>
        </div>
    );
};

export default Simplefor;