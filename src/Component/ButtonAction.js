import React,{useState} from 'react';

const ButtonAction=()=>{
    let [btnClick, setBtnClick] = useState(false);
    let paraText = " Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"

    return(
        <div>
             <button key="click"
              onClick={()=>setBtnClick(true)}
             > Render </button>
             {/* <p> {btnClick?paraText : ""}</p> */}

            { btnClick==true && <p> {paraText} </p>  }
        </div>
    )

}

export default ButtonAction;