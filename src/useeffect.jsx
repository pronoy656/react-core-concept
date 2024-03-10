import { useEffect, useState } from "react"

import './user.css'  //css component import
import Use from "./use"


export default function User (){
    const [user,setUser] = useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return(
        <div className="userbox">
            <h3>User:{user.length}</h3>
          {
            user.map(use =><Use use={use}></Use>)
          }
        </div>
    )
}