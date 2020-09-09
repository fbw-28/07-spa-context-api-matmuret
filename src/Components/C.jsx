import React,{useContext} from 'react'
import {MyContext} from "../App"

export default function () {
    const{x,y,setY}= useContext(MyContext)
    return (
        <div>
            <h1>C, x= {x} <button onClick={()=>setY(y+1)}>increment y</button></h1>
        </div>
    )
}
