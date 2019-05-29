import React from 'react'
import { Checkbox } from 'semantic-ui-react'

// const CheckboxUI = (props) => <Checkbox toggle />


const CheckboxUI = (props) => {
  console.log(props.toggle)
  let isToggle;
  if(props.toggle) {isToggle='toggle'};
  return (
    <Checkbox
      isToggle
    />
  )
}

/*
export const CheckboxToggle = () => <Checkbox toggle />

export const CheckboxChecked = () => {
  // return <Checkbox toggle defaultChecked/>
  return <Checkbox toggle defaultChecked onChange={onStatusChange}/>
}
*/

export default CheckboxUI;
