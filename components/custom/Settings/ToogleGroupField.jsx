import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import React from 'react'

const ToogleGroupField = ({label,value,options,onHandleStyleChange}) => {
  return (
    <div>
      <label>{label}</label>
      <ToggleGroup type="single" defaultValue={value} onValueChange={(v)=>onHandleStyleChange(v)}>
        {options.map((option,index)=>{
            <ToggleGroupItem key={index} value={option}>{option}</ToggleGroupItem>
        })}
    
      </ToggleGroup>
    </div>
  )
}

export default ToogleGroupField
