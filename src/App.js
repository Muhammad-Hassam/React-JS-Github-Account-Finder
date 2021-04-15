import './App.css';
import {useState,useEffect} from 'react'
const App=()=> {
  const [user, setuser]=useState("");
  const [userdata,setUserdata]=useState("");
  const [loading,setLoading]=useState(true);
  const [gituser,setgituser]=useState("")
const handleUser=({target})=>{
  setuser(target.value)
}



    
 
const githubdata=()=>{
  const url=`http://api.github.com/users/${user}/repos`;
  const promise=fetch(url);
  promise.then((res)=>{
    const json=res.json()
    json.then((data)=>{
       setUserdata(data);
       setLoading(false);
       console.log(data)
    })
  })
  promise.catch((err)=>{console.log(err)});
}
  return (
 <>
 <h1>Github Account Finder</h1>
 <input type="text" onChange={handleUser} value={user}/>
 <button onClick={githubdata}>Find</button>
 </>
  );
}

export default App;
