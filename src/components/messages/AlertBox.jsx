import React from 'react'
import Alert from 'react-bootstrap/Alert';

const AlertBox = (props) => {
    console.log(props)
    var variant = 'success';
    var message = props.block.message;
    console.log(message)

    if(!props.block.success){
        
        variant = "danger"
    }
    if(props.block.status === 400){
        console.log("yes")
        var alertBoxMap = props.block.data.data;
        console.log(alertBoxMap)
       
        return  Object.values(alertBoxMap).map((item)=>{
            //console.log(item)
        return <Alert key={variant} variant={variant}>
            {item[0]}
        </Alert>
        })
    }
    if(props.block.hasOwnProperty('data')&&props.block.data.hasOwnProperty('typeOf')&&props.block.data.typeOf === "login"){
        console.log("yes")
        var alertBoxMap = props.block.data.data;
        console.log(alertBoxMap)
       
        return  (alertBoxMap).map((item)=>{
            //console.log(item)
        return <Alert key={variant} variant={variant}>
            {item}
        </Alert>
        })
    }
  return (
    <Alert key={variant} variant={variant}>
        {message}
    </Alert>
  )
}

export default AlertBox
