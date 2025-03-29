import { Slider } from '@radix-ui/react-slider'
import React from 'react'

const SliderField = ({label,value,onHandlerStyleChange,type="px"}) => {
    const FormattedValue = (value_)=>{
        return Number(value_.toString().replace(type,''))
    }
  return (
    <div>
      <label>{label} ({value})</label>
      <Slider defaultValue={[FormattedValue(value)]} max={100} step={1} 
      onValueChange={(v)=>onHandlerStyleChange(v+type)}/>
    </div>
  )
}

export default SliderField
