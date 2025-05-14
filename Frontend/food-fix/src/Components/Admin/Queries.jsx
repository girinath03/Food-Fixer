import '../../Css/Admin/Queries.css';
import Luffy from '../../Images/breakfast.jpg';  
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Queries() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/adminqueries1');
  }


  return (
    <div className='adminqueries' id='ad-queries-bdy' onClick={handleClick}>
      <div id='ad-queries-img'>
        <img src={Luffy} alt="" />
      </div>
      <div id='ad-queries-head'>
        <span>QUERIES</span>
      </div>
    </div>
  );
}   