import { useState } from "react";


const Useinputfield = (defaultValue) => {
   const [fieldvalue, setfieldvalue] = useState(defaultValue)

   const handleFieldchange = (e) => {
    // e.preventDefault()
    setfieldvalue (e.target.value)
   }
   return [ fieldvalue, handleFieldchange]
};

export default Useinputfield;