import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import {useState} from 'react'
import axios from 'axios'
import List from './component/List';

function App() {
  const [userInfo,setUserInfo]= useState();

   async function apiFetch(){
    const  response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
   
  

    setUserInfo( data);
   
    
   
    
    




  }

 useEffect(()=>{

 
 apiFetch();
 

  },[])


 

  
  



  return (
    
    <>
    <List userInfo = {userInfo} />
    
    
    </>
    
    
     
     
     
   
   
  )
}

export default App;
