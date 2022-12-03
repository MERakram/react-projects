import React, { useState } from "react";

export default function Comp(){
    const [show,setShow] = useState([true,true,true,true])

    const stars = ["bonjour", "hello", "ciao", "coucou"].map((e, i) =>
        show[i] ? <li key={i} onClick={() => setShow(prevState => {show[i]=false; return {...prevState,show}})}> value is {e}</li> : null
    )
    return (
        <div>
            <ul>
                {stars}
            </ul>
        </div>
    )
}