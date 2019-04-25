import React from 'react'
import { Checkbox } from 'semantic-ui-react'

export const CheckboxToggle = () => <Checkbox toggle />

export const CheckboxChecked = () => {

  return (
      <Checkbox toggle defaultChecked onChange={onStatusChange}/>
  )
}