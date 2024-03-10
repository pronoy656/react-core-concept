import { useState } from "react"

export default function Counter (){
    const [count,setCount] = useState(0)
 
const handleAdd = () =>{
    const updateValue = count + 1
    setCount(updateValue)
}
const handleReduce = ()=>{
    const reduceValue = count - 1
    setCount(reduceValue)
}

    return (
        <div style={{border :'2px solid green'}}>
            <h2>Counter :{count}</h2>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleReduce}>REDUCE</button>
        </div>
    )
}