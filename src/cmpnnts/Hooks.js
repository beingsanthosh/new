import { useState } from "react";
function Hooks(){
    const [arr,setArr]=useState(['apple','banana','papaya','apple'])
    const [fruitname,setFruitname]=useState('')
    return(
        <div>
            <h1>Hooks</h1>
            <input type="text" onChange={(e)=>setFruitname(e.target.value)} />
            <button>find</button>
            <br/>
            <ul style={{'display':'inline-block'}} />
        </div>
    )
}
export default Hooks;