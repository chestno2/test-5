import React from 'react'
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MicIcon from '@material-ui/icons/Mic';
import { Avatar, IconButton, Input } from '@material-ui/core';

function Header() {
    return (
        <div className="flex justify-between  p-5  z-50  sticky top-0 " style={{alignItems:"center"}}>
            
          <div className="flex justify-start">
            <MenuSharpIcon  className="ml-3" />
             <img  className=" ml-3 h-6 object-contain "
             src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/300px-YouTube_Logo_2017.svg.png"
              alt="Logo"  />
              </div>
              <div className="flex justify-center border-gray-400 border  w-2/5  ">
                  <input placeholder="Search" type ="text" className="flex-1 border-none" />
                   <SearchIcon style={{width:"60px"}} className=" border-l-2 bg-gray-100 " />
                   
            </div>
            
               
           
            <div className="flex justify-end ">
            <VideoCallIcon className=" md:mr-3 mr-1 "  />
            <AppsIcon className=" md:mr-3 mr-1"/>
            <NotificationsIcon  className=" md:mr-3 mr-1" />
            <Avatar className=" md:mr-3 mr-1" src="https://upload.wikimedia.org/wikipedia/commons/0/09/Zlatan_Ibrahimovi%C4%87_June_2018.jpg"  />
            </div>
           
        </div>
    )
}

export default Header
