import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const [ joke,setjoke] = useState("loading")
  const [fname,setFN] = useState("john")
  const [sname,setSN] = useState("doe")

  const newjoke = (first,second)=>{
    fetch('http://api.icndb.com/jokes/random?firstName=john&lastName=doe')
    .then(res=>res.json())
    .then(res2=>{
      console.log(res2)
       setjoke(res2.value.joke)
       })
  }
  useEffect(()=>{
    newjoke(fname,sname)
},[fname,sname])
  return (
    <div className="App">
      <h3>Coders Never Quit</h3>
      <input type="text" value={fname} onChange={(e)=>setFN(e.target.value)} />
      <input type="text" value={sname} onChange={(e)=>setSN(e.target.value)} />
      <button onClick={()=>newjoke()}>Get Another Joke</button>
      <h4>{joke}</h4>
    </div>
  );
}

export default App;
