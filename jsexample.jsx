import React from 'react'

const Jsxexample = () => {
    let name ="mca";
    let n1=20,
     n2=30;
    const findGreater=()=>{
        if(n1>n2){
         return n1;
        }else{
            return n2;
        }
    }
  return (
    <div>Jsxexample
    <h3> welcome to {name} </h3>
    <h3>greater number is{n1>n2?"n1":"n2"}</h3>
    <h3>greater number is {findGreater()}</h3>
    </div>
  )
}

export default Jsxexample
