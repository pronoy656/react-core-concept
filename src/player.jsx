import { useState } from "react"

export default function Player (){
    const [player, setPlayer] = useState(0)

    const handleAdd = () =>{
        const updatePlayer = player + 1
        setPlayer(updatePlayer)
    }
    const handleRemove = () =>{
        const updatePlayer = player - 1
        setPlayer(updatePlayer)
    }
    return (
        <div style={{border : '2px solid purple',margin :'10px',borderRadius :'15px'}}>
            <h3>Player :{player}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}