import React from 'react'


function Sidebarrow({title,Icon}) {
    return (
        <div className="flex hover:bg-gray-200 " style={{alignItems:"center", padding:"10px 20px"}}>
           
            <Icon className=" ml-5 hover:text-red-600  font-bold " />
            <h1 className=" text-gray-500 text-md ml-5  flex 1 font-bold" style={{}} >{title}</h1>
           
           
        </div>
    )
}

export default Sidebarrow
