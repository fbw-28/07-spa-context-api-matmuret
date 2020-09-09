import React,{useContext} from 'react'
import {MyContext} from "../App"

export default function () {
    const{y,x,setX}= useContext(MyContext)
    return (
        <div>
            <h1>B, y= {y} <button onClick={()=>setX(x+1)}>increment x</button></h1>
        </div>
    )
}
