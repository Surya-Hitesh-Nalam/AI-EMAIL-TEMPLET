'use client'
import React, { useState } from 'react'
import ButtonComponent from '../custom/Element/ButtonComponent'
import TextComponent from '../custom/Element/TextComponent'
import ImageComponent from '../custom/Element/ImageComponent'
import LogoComponent from '../custom/Element/LogoComponent'
import DividerComponent from '../custom/Element/DividerComponent'

const ColumnLayout = ({layout}) => {
  const [dragOver,setDragOver] = useState() 
    const {emailTemplet,setEmailTemplet} = useEmailTempletContext()
    const {dragElementLayout,setDragElementLayout}=useDragLayoutElementContext()
  
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
  return (
    <div>
        <div style={{display:'grid',
            gridTemplateColumns:`repeat(${layout.numOfCol},1fr)`,
            gap:'0px'
        }}>
      {Array.from({length:layout?.numOfCol}).map((_,index)=>{
        <div key={index} className={`p-2 flex items-center ${!layout?.[index]?.type&& 'bg-gray-100 border border-dashed'}  justify-center
          ${(index==dragOver?.index && dragOver?.columnId)&&'bg-green-100'}`}
         onDragOver={(event)=>onDragOverHandle(event,index)}
         onDrop={onDrophandle}>
          {GetElementComponent(layout?.[index]) ?? "Drag Element Here"}
        </div>
      })}
      </div>
    </div>
  )
}

export default ColumnLayout
