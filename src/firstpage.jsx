import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { HiSearch } from 'react-icons/hi';
import {BsGrid3X3Gap} from 'react-icons/bs';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineCar} from 'react-icons/ai';
import {BsBag} from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {RiScissors2Line} from 'react-icons/ri';
import {AiOutlineCalendar} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';
import {SlLogout} from 'react-icons/sl';
import {GrNotification} from 'react-icons/gr';
import {CgProfile} from 'react-icons/cg';
import {BsSliders} from 'react-icons/bs';
import {SiMcdonalds} from 'react-icons/si';
import {AiOutlineRetweet} from 'react-icons/ai';
import car2 from './images/car2.png';
import car3 from './images/car3.png';
import car4 from './images/car4.png';
import car5 from './images/car5.png';
import car6 from './images/car6.png';
import car7 from './images/car7.png';
import car8 from './images/car8.png';
import heart from './images/heart.png';
import redheart from './images/redheart.png';


export const Firstpage = (props) => {

    return (
        <div>
            
        <div className="sidebar">
            
        <div className="logo"><div className="icon"><SiMcdonalds></SiMcdonalds></div><h1 className="motiv">Motiv.</h1>    </div>
            
         <div className="list-item">  <div className="list-icon"><BsGrid3X3Gap></BsGrid3X3Gap></div> <Button className="item-name"><ul>Dashboard</ul></Button></div>
         <div className="list-item">  <div className="list-icon"><AiOutlineUser></AiOutlineUser></div> <Button className="item-name"><ul>Assets</ul></Button></div>
         <div className="list-item">  <div className="list-icon"><AiOutlineCar></AiOutlineCar></div> <Button className="item-name"><ul>Booking</ul></Button></div>
         <div className="list-item">  <div className="list-icon"><BsBag></BsBag></div> <Button className="item-name"><ul>Sell Cars</ul></Button></div>
         <div className="list-item">  <div className="list-icon"><AiOutlineShoppingCart></AiOutlineShoppingCart></div> <Button className="item-name"><ul>Buy Cars</ul></Button></div>
         <div className="list-item">  <div className="list-icon"><RiScissors2Line></RiScissors2Line></div> <Button className="item-name"><ul>Services</ul></Button></div>
         <div className="list-item">  <div className="list-icon"><AiOutlineCalendar></AiOutlineCalendar></div> <Button className="item-name"><ul>Calendar</ul></Button></div>
         <div className="list-item">  <div className="list-icon"><BsGrid3X3Gap></BsGrid3X3Gap></div> <Button className="item-name"><ul>Messages</ul></Button></div>
            
        <div className="barbottom">
            
        <div className="list-item">  <div className="list-icon"><FiSettings></FiSettings></div> <Button className="item-name"><ul>Settings</ul></Button></div>
        <div className="list-item">  <div className="list-icon"><SlLogout></SlLogout></div> <Button className="item-name"><ul>Log out</ul></Button></div>
    
            </div>
        </div>
        
        <div className="search">
            
            <div className="searchicon"><HiSearch></HiSearch></div>
            <input className="searchbar" type="search" placeholder="Search or type"></input>
            
        </div>
        
        <div className="topbuttons">    
            <div className="notif"><GrNotification></GrNotification></div>
            <div><CgProfile></CgProfile></div>
        </div>

        <div className="body">
            <h1 className="booking">Booking</h1>
            <div className="dropline" >
            <Button id="dropdown-basic-button" title="Dropdown button" className="dropdown">
                New
                <div class='carret'> </div>
            </Button>

            <Button id="dropdown-basic-button" title="Dropdown button" className="dropdown">
                Toyota
                <div class='carret'> </div>    
            </Button>
                    
            <div className="roundbuttons"><Button className="roundbutton"><BsGrid3X3Gap></BsGrid3X3Gap></Button>
            <Button className="roundbuttonslider">    <BsSliders></BsSliders></Button></div>
            </div>

     <div className="cars">

     <div className="carbox">    
        <div className="cardhead"><p>Porshe 718 Cayman S</p><img className="heart" src={heart} alt=""/></div>
            <p className="subhead">Coupe</p>           
            
            <img src = {car7} alt=""/>
            
            <div className="cardbottom">
                <div><AiOutlineUser></AiOutlineUser></div><div>4</div><div className="rt"><AiOutlineRetweet></AiOutlineRetweet></div><div>Manual</div>
                <div className="price">$400</div>/d
            </div>
            
            </div> 

        <div className="carbox">    
        <div className="cardhead"><p>Porshe 718 Cayman S</p><img className="heart" src={redheart} alt=""/></div>
            <p className="subhead">Coupe</p>           
            
            <img src = {car2} alt=""/>
            
            <div className="cardbottom">
                <div><AiOutlineUser></AiOutlineUser></div><div>4</div><div className="rt"><AiOutlineRetweet></AiOutlineRetweet></div><div>Manual</div>
                <div className="price">$400</div>/d
            </div>
            
            </div>    
        
        <div className="carbox">
        <div className="cardhead"><p>Porshe 718 Cayman S</p><img className="heart" src={heart} alt=""/></div>
            <p className="subhead">Coupe</p>            
            
            <img src = {car3} alt=""/>
            
            <div className="cardbottom">
                <div><AiOutlineUser></AiOutlineUser></div><div>4</div><div className="rt"><AiOutlineRetweet></AiOutlineRetweet></div><div>Manual</div>
                <div className="price">$400</div>/d
            </div>       
        </div>    
        </div>

        <div className="cars-row2">
        <div className="carbox">
        <div className="cardhead"><p>Porshe 718 Cayman S</p><img className="heart" src={heart} alt=""/></div>
            <p className="subhead">Coupe</p>            
            
            <img src = {car4} alt=""/>
            
            <div className="cardbottom">
                <div><AiOutlineUser></AiOutlineUser></div><div>4</div><div className="rt"><AiOutlineRetweet></AiOutlineRetweet></div><div>Manual</div>
                <div className="price">$400</div>/d
            </div>
        </div>    
        
        <div className="carbox">
        <div className="cardhead"><p>Porshe 718 Cayman S</p><img className="heart" src={heart} alt=""/></div>
            <p className="subhead">Coupe</p>            
            
            <img src = {car5} alt=""/>
            
            <div className="cardbottom">
                <div><AiOutlineUser></AiOutlineUser></div><div>4</div><div className="rt"><AiOutlineRetweet></AiOutlineRetweet></div><div>Manual</div>
                <div className="price">$400</div>/d
            </div>
        </div>

        <div className="carbox">
        <div className="cardhead"><p>Porshe 718 Cayman S</p><img className="heart" src={heart} alt=""/></div>
            <p className="subhead">Coupe</p>            
            
            <img src = {car6} alt=""/>
        
            <div className="cardbottom">
                <div><AiOutlineUser></AiOutlineUser></div><div>4</div><div className="rt"><AiOutlineRetweet></AiOutlineRetweet></div><div>Manual</div>
                <div className="price">$400</div>/d
            </div>
        
        </div>    
        
        </div>

        <div className="cars-row3">
        <div className="carbox">
        <div className="cardhead"><p>Porshe 718 Cayman S</p><img className="heart" src={heart} alt=""/></div>
            <p className="subhead">Coupe</p>            
            
            <img src = {car7} alt=""/>
        
            <div className="cardbottom">
                <div><AiOutlineUser></AiOutlineUser></div><div>4</div><div className="rt"><AiOutlineRetweet></AiOutlineRetweet></div><div>Manual</div>
                <div className="price">$400</div>/d
            </div>
        </div>    
        
        <div className="carbox">
        <div className="cardhead"><p>Porshe 718 Cayman S</p><img className="heart" src={heart} alt=""/></div>
            <p className="subhead">Coupe</p>            
            
            <img src = {car8} alt=""/>
            
            <div className="cardbottom">
                <div><AiOutlineUser></AiOutlineUser></div><div>4</div><div className="rt"><AiOutlineRetweet></AiOutlineRetweet></div><div>Manual</div>
                <div className="price">$400</div>/d
            </div>
        </div>    
        
        <div className="carbox">
        <div className="cardhead"><p>Porshe 718 Cayman S</p><img className="heart" src={heart} alt=""/></div>
            <p className="subhead">Coupe</p>            
            
            <img src = {car3} alt=""/>
            
            <div className="cardbottom">
                <div><AiOutlineUser></AiOutlineUser></div><div>4</div><div className="rt"><AiOutlineRetweet></AiOutlineRetweet></div><div>Manual</div>
                <div className="price">$400</div>/d
            </div>
        </div>    

        </div>
        </div>
        </div>
    )
}