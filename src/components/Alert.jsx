import React from 'react'

export default function Alert(props) {

  // Adding a method here for Capatilizing the first word of the Alert
  const capatilize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (

    // If the props.alert is null here then we would face a kind of message here regarding different errors
    // Otherwise we have the code run successfully

    props.alert && <div class={`alert alert-${props.alert.t1} alert-dismissible fade show`} role="alert">
      <strong> {capatilize(props.alert.t1)} </strong> : {props.alert.msg}
    </div>
  )
}