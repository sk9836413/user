import React from 'react'
import {useState,useEffect} from 'react'
import Card from './Card';
import './List.css';


function List(userInfo) {
  let user = Object.values(userInfo);
  let userData= user[0];

  return (
    userData?
    userData.map((user,i)=>{
        return (<Card key={i} userInfo={user}/>)}
       
    
  ):
  <div className="sk-cube-grid">
  <div className="sk-cube sk-cube1"></div>
  <div className="sk-cube sk-cube2"></div>
  <div className="sk-cube sk-cube3"></div>
  <div className="sk-cube sk-cube4"></div>
  <div className="sk-cube sk-cube5"></div>
  <div className="sk-cube sk-cube6"></div>
  <div className="sk-cube sk-cube7"></div>
  <div className="sk-cube sk-cube8"></div>
  <div className="sk-cube sk-cube9"></div>
</div>





  
  
  )
    
}

export default List