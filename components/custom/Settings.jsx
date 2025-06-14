'use client'
import { useSelectedElementContext } from '@/app/provider'
import React, { useEffect, useState } from 'react'
import InputField from './Settings/InputField'
import ColorPickerField from './Settings/ColorPickerField'
import InputStyleField from './Settings/InputStyleField'
import SliderField from './Settings/SliderField'
import TextAreaField from './Settings/TextAreaField'

const Settings = () => {
  const {selectedElement,setSelectedElement} = useSelectedElementContext()
  const [element,setElement] = useState()

  useEffect(() => {
      setElement(selectedElement?.layout?.[selectedElement?.index])
  }, [selectedElement])

  const onHandleInputChange = (fieldName,value)=>{
    const updatedData = {...selectedElement}

    updatedData.layout[selectedElement.index][fieldName] = value

    setSelectedElement(updatedData)
  }

  const onHandleStyleChange = (fieldName,fieldValue)=>{
    let updateElement = {
      ...selectedElement,
      layout:{
        ...selectedElement?.layout,
        [selectedElement?.layout]:{
          ...selectedElement?.layout[selectedElement?.index],
          style:{
            ...selectedElement?.layout[selectedElement?.index]?.style,
            [fieldName]: [fieldValue]
          }
        }
      }
    }

    setSelectedElement(updateElement)
  }
  return (
    <div className='p-5 flex flex-col gap-4'>
      <h2 className='font-bold text-xl'>Settings</h2>
      {element?.content && <InputField label={'Content'} value={element?.content} onHandleInputChange={(value)=>onHandleInputChange('content',value)}/>}
      
      
      {element?.textarea && <TextAreaField label={'Text Area'} 
      value={element?.textarea} 
      onHandleInputChange={(value)=>onHandleInputChange('textarea',value)}/>}
      
      
      {element?.url && 
      <InputField label={'url'} value={element?.url} onHandleInputChange={(value)=>onHandleInputChange('url',value)}/>}
      
      
      {element?.style?.backgroundColor && 
      <ColorPickerField label="backgorund color" value={element?.style?.backgroundColor}
      onHandleStyleChange={(value)=>onHandleStyleChange('backgroundColor',value)}/>}
      
      
      {element?.style?.color && 
      <ColorPickerField label="Text color" value={element?.style?.color}
      onHandleStyleChange={(value)=>onHandleStyleChange('color',value)}/>}
      
      
      {element?.style?.fontSize &&
      <InputStyleField label={'Font Size'} value={element?.style?.fontSize} 
      onHandleStyleChange={(value)=>onHandleStyleChange('fontSize',value)}/>}
      
      
      {element?.style?.padding &&
      <InputStyleField label={'Padding'} value={element?.style?.padding} type="%"
      onHandleStyleChange={(value)=>onHandleStyleChange('padding',value)}/>}
      
      
      {element?.style?.borderRadius &&
      <SliderField label={'Border Radius'} value={element?.style?.borderRadius} 
      onHandleStyleChange={(value)=>onHandleStyleChange('borderRadius',value)}/>}
      
      
      {element?.style?.width &&
      <SliderField label={'Width'} value={element?.style?.width} type="%"
      onHandleStyleChange={(value)=>onHandleStyleChange('width',value)}/>}
    </div>
  )
}

export default Settings
