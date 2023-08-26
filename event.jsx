import React from 'react'

const Event = () => {
const display = (msg) => { 
    alert(msg);
  
};

 return (
    <div>
        <h2>Event Handling</h2>
        <button onpress ={display}> click me</button>


    </div>
  );
};

export default Event
