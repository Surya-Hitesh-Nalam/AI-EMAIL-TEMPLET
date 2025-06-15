import React from 'react'

const TextComponent = ({style,content}) => {
  return (
    <div style={{width:'100%'}}>
      <h1 style={style}>{content}</h1>
    </div>
  )
}

export default TextComponent
