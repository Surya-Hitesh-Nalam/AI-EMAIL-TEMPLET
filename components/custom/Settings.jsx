'use client'
import { useSelectedElementContext } from '@/app/provider'
import React, { useEffect, useState } from 'react'
import InputField from './Settings/InputField'
import ColorPickerField from './Settings/ColorPickerField'
import InputStyleField from './Settings/InputStyleField'
import SliderField from './Settings/SliderField'
import TextAreaField from './Settings/TextAreaField'
import ToogleGroupField from './Settings/ToogleGroupField'
import { AArrowUp, AlignCenter, AlignLeft, AlignRight, CaseLower, CaseUpper } from 'lucide-react'
import DropDownField from './Settings/DropDownField'
import ImagePreview from './Settings/ImagePreview'

const TextAlignOptions =[
  {
    value:'left',
    icon:AlignLeft
  },
  {
    value:'center',
    icon:AlignCenter
  },
  {
    value:'right',
    icon:AlignRight
  },
]



const TextTransformOptions =[
  {
    value:'uppercase',
    icon: CaseUpper
  },
  {
    value:'lowercase',
    icon:CaseLower
  },
  {
    value:'capitalize',
    icon:AArrowUp
  },
]

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
        [selectedElement?.index]:{
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

const onHandleOuterStyleChange = (fieldName,fieldValue)=>{
    let updateElement = {
      ...selectedElement,
      layout:{
        ...selectedElement?.layout,
        [selectedElement?.index]:{
          ...selectedElement?.layout[selectedElement?.index],
          outerStyle:{
            ...selectedElement?.layout[selectedElement?.index]?.outerStyle,
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
      
      {element?.imageUrl && <ImagePreview label={'Image Preview'} value={element?.imageUrl} onHandleInputChange={(value)=>onHandleInputChange('imageUrl',value)}/>}

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
      <InputStyleField label={'Padding'} value={element?.style?.padding} 
      onHandleStyleChange={(value)=>onHandleStyleChange('padding',value)}/>}
      
      {element?.style?.margin &&
      <InputStyleField label={'Margin'} value={element?.style?.margin} 
      onHandleStyleChange={(value)=>onHandleStyleChange('Margin',value)}/>}
      
      {element?.style?.borderRadius &&
      <SliderField label={'Border Radius'} value={element?.style?.borderRadius} 
      onHandleStyleChange={(value)=>onHandleStyleChange('borderRadius',value)}/>}
      
      
      {element?.style?.width &&
      <SliderField label={'Width'} value={element?.style?.width} type="%"
      onHandleStyleChange={(value)=>onHandleStyleChange('width',value)}/>}

      {element?.style?.textAlign && 
      <ToogleGroupField label={'Text Align'} value={element?.style?.textAlign} options={TextAlignOptions} onHandleStyleChange={(value)=>onHandleStyleChange('textAlign',value)}/>}
    
       {element?.style?.textTransform && 
      <ToogleGroupField label={'Text Transform'} value={element?.style?.textTransform} options={TextTransformOptions} onHandleStyleChange={(value)=>onHandleStyleChange('textTransform',value)}/>}

      {element?.style?.fontWeight && 
      <DropDownField label={'Font Weight'} value={element?.style?.fontWeight} options={['Normal','Bold']} onHandleStyleChange={(value)=>onHandleStyleChange('fontWeight',value)}/>}


      <div>
        <h2 className='font-bold mb-2'>Outer Style </h2>
      {element?.outerStyle?.backgroundColor && 
      <ColorPickerField label="backgorund color" value={element?.outerStyle?.backgroundColor}
      onHandleStyleChange={(value)=>onHandleOuterStyleChange('backgroundColor',value)}/>}

      {element?.outerStyle?.justifyContent && 
      <ToogleGroupField label="Align" options={TextAlignOptions} value={element?.outerStyle?.justifyContent}
      onHandleStyleChange={(value)=>onHandleOuterStyleChange('justifyContent',value)}/>}

      </div>
    </div>
  )
}

export default Settings
