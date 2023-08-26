import React,{ useState} from 'react'
import Counterr from '../Counters/Counterr';
import Navbar from '../practice/Navbar';

const Delete = () => {
    const [counters,setCounter] =useState([
        {id:1,counts :1},
        {id:2,counts :2},
        {id:3,counts :3},
        {id:4,counts :4},
    ]);
    const deletec=(id)=>{
        let lcounter=counters.filter((counter)=> counter.id!==id);
        setCounter(lcounter);

    };
    const findcounter=()=>{
        return counters.filter((counters)=>counters.counts>0).length;
    }
    const Decrement =(counter)=>{
        const lcounter=[...counters];
        const index=lcounter.indexOf(counter);
       if( lcounter[index].counts){
        lcounter[index].counts--;
        setCounter(lcounter);
       }
    };
    const increment=(counter)=>{
        const lcounter=[...counters];
        const index=lcounter.indexOf(counter);
        lcounter[index].counts++;
        setCounter(lcounter);
        //let lcount =Count;
        //setcount(lcount+1);  
    };
    const resetall=()=>{
     setCounter(counters.map((counter)=>{
    counters.counts=0;
    return counter;
  })
  );
}

    
  return (
    <div className='mx-3'>
        
        <Navbar acounter={findcounter()}/>
        <button className='btn btn-primary' onClick={resetall} > RESET ALL </button>
        {counters.map((counter)=>(
            <Counterr 
            Key={counters.id} 
            counter={counter}
            onDelete={deletec}
            onIncrement={increment}
            onDecrement={Decrement}
        
            />
        ))}
    </div>
  )
}

export default Delete
