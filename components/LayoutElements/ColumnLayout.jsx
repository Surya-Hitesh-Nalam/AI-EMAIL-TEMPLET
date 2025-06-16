'use client'
import React, { useState } from 'react'
import ButtonComponent from '../custom/Element/ButtonComponent'
import TextComponent from '../custom/Element/TextComponent'
import ImageComponent from '../custom/Element/ImageComponent'
import LogoComponent from '../custom/Element/LogoComponent'
import DividerComponent from '../custom/Element/DividerComponent'
import { useDragLayoutElementContext, useEmailTempletContext, useSelectedElementContext } from '@/app/provider'
import { ArrowDown, ArrowUp, Trash } from 'lucide-react'

const ColumnLayout = ({layout}) => {
  const [dragOver,setDragOver] = useState() 
    const {emailTemplet,setEmailTemplet} = useEmailTempletContext()
    const {dragElementLayout,setDragElementLayout}=useDragLayoutElementContext()
    const {selectedElement, setSelectedElement} = useSelectedElementContext()
    
  const onDragOverHandle=(event,index)=>{
      event.preventDefault()
      setDragOver({
        index:index,
        columnId:layout?.id
      })
  }

  const onDrophandle = ()=>{
    const index=dragOver.index;
    setEmailTemplet(prevItem=>
      prevItem?.map(col=>col.id===layout?.id?{...col,[index]:dragElementLayout?.dragElement}:col)
    )
    setDragOver(null)
  }

  const GetElementComponent=(element)=>{
    if(element?.type=='Button'){
      return <ButtonComponent {...element}/>
    }else if(element?.type=='Text'){
      return <TextComponent {...element}/>
    }else if(element?.type=='Image'){
      return <ImageComponent {...element}/>
    }else if(element?.type=='Logo'){
      return <LogoComponent {...element}/>
    }else if(element?.type=='Divider'){
      return <DividerComponent {...element}/>
    }
  }

  const deleteLayout=(layoutId)=>{
    const updatedEmailTemplate = emailTemplet?.filter(item=>item.id!=layoutId);
    setEmailTemplet(updatedEmailTemplate);
    setSelectedElement(null)
  }

  const moveItemsUp=(layoutId)=>{
    const index = emailTemplet.findIndex((item)=>item.id === layoutId);
    if(index>0){
      setEmailTemplet((prevItem)=>{
        const updatedItems = [...prevItem];

        [updatedItems[index],updatedItems[index-1]]=[updatedItems[index-1],updatedItems[index]];
        return updatedItems
      })
    }
  }

  const moveItemsDown=(layoutId)=>{
    const index = emailTemplet.findIndex((item)=>item.id === layoutId);
    if(index>0){
      setEmailTemplet((prevItem)=>{
        const updatedItems = [...prevItem];

        [updatedItems[index],updatedItems[index+1]]=[updatedItems[index+1],updatedItems[index]];
        return updatedItems
      })
    }
  }

  return (
    <div className='relative'>
        <div style={{display:'grid',
            gridTemplateColumns:`repeat(${layout.numOfCol},1fr)`,
            gap:'0px'
        }} className={`${selectedElement?.layout?.id === layout?.id && 'border border-dashed border-blue-500'}`}>
      {Array.from({length:layout?.numOfCol}).map((_,index)=>(
        <div key={index} className={`p-0 flex items-center ${!layout?.[index]?.type&& 'bg-gray-100 border border-dashed'} cursor-pointer justify-center
          ${(index==dragOver?.index && dragOver?.columnId)&&'bg-green-100'}
          ${(selectedElement?.layout?.id==layout?.id && selectedElement?.index==index)&&'border-blue-500 border-4'}`}
         onDragOver={(event)=>onDragOverHandle(event,index)}
         onDrop={onDrophandle}
         onClick={()=>setSelectedElement({layout:layout,index:index})}>
          {GetElementComponent(layout?.[index]) ?? "Drag Element Here"}
        </div>
      ))}

      {selectedElement?.layout?.id === layout?.id &&
      <div className='absolute -right-10'>
      <div className='bg-gray-100 cursor-pointer  hover:scale-105 transition-all p-2 rounded-full hover:shadow-md' onClick={()=>deleteLayout(layout?.id)}>
        <Trash className='h-4 w-4 text-red-500'/>
      </div>
      <div className=' cursor-pointer hover:scale-105 transition-all p-2 rounded-full hover:shadow-md' onClick={()=>moveItemsUp(layout?.id)}>
        <ArrowUp className='h-4 w-4'/>
      </div>
      <div className=' cursor-pointer hover:scale-105 transition-all p-2 rounded-full hover:shadow-md' onClick={()=>moveItemsDown(layout?.id)}>
        <ArrowDown className='h-4 w-4'/>
      </div>
      </div>}
      </div>
    </div>
  )
}

export default ColumnLayout
