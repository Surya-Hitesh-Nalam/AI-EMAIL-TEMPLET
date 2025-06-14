import React from 'react'

const TextComponent = ({style,content}) => {
  return (
    <div>
      <h1 style={style}>{content}</h1>
    </div>
  )
}

export default TextComponent
