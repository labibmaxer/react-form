import React from 'react';
import Grandpa from '../Grandpa';
// import '/'
import './FamilyTree.css';
const FamilyTree = () => {
    return (
        <div className='family'>
               <h1>Family Tree</h1>
               <Grandpa></Grandpa>
        </div>
    );
};

export default FamilyTree;