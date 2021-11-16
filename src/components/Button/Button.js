import React from 'react'

 const  Button = (props) => {
    return (
        <div>
          <button className={props.class} onClick={props.click} type={props.type}>{props.value}</button>  
        </div>
    )
}
export default Button;