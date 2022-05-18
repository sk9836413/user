import React from 'react'
import { useState,useEffect } from 'react';
import './Card.css';
import './List.css';
import { EditFilled , MailFilled, PhoneFilled,GlobalOutlined, HeartTwoTone,DeleteFilled,HeartFilled, Html5Outlined} from '@ant-design/icons';
import Popup from './Popup'

export default function Card(userInfo) {
const [userName,setUsername] = useState()
const [color,SetColor] = useState("blue")
const [heartIcon,setheartIcon] = useState("HeartOutlined")
const[isPopupOpen,setPopup]=useState(false);
const[userDat,setUserDat]=useState();
const handleClickedPopup=()=>{
  
 
  setPopup(true);

}
const handleClose=()=>{
  setPopup(false);
  
}

   

    const [avatar,SetAvatar]= useState();
    async function getAvatar(username){
        const  response = await fetch(`
        https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=hap 
        py`);
        const data = await response ;
        SetAvatar(data.url);
    }
   
   useEffect(()=>{
       getAvatar(userInfo.userInfo.username)
       setUserDat(userInfo.userInfo);
   },[userInfo.userInfo.username])
   
   

    
  return (
    userDat?
  /*  <div className='cards'>

            <div className="card" >
                 <img src={avatar} className="card-img-top" alt="..."/>
                 <div className="card-body">
                      <h>{userInfo.userInfo.name}</h>
                  <div/>
                    <MailFilled/>
                     <h>{userInfo.userInfo.email}</h>
                         <div/>
                          <PhoneFilled />
                          <h>{userInfo.userInfo.phone}</h>
                             <div/>
                            <GlobalOutlined />
                         <h>{userInfo.userInfo.website}</h>
    
                            </div>
    <div className='button'>
   
   
   


    </div>
</div>
</div>*/

<div className="card-deck">
  <div className="card">
    <img src={avatar} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h1 className="card-title">{userDat.name}</h1>

      <MailFilled/>
    <h>{userDat.email}</h>
     <div/>
      <PhoneFilled />
      <h>{userDat.phone}</h>
         <div/>
        <GlobalOutlined />
     <h>{userDat.website}</h>
       
    </div>
    <div className="card-footer">
    <HeartFilled  style={{ color: color , fontSize: '32px' }} onClick={()=>{
        SetColor("red")
    }} className="heart"/>
 <EditFilled style={{fontSize: '32px' }}onClick={()=>{setPopup(true)}} className="edit" />
 

 {isPopupOpen? <Popup handleClose={handleClose} data={userDat}/>:null}
 <DeleteFilled  style={{fontSize: '32px' }} className="delete" />
      
    </div>
  </div>
  </div>
    
    

   : <div className="sk-cube-grid">
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
   
   
   
  
};

