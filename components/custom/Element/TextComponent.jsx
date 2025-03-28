import React from 'react'

const TextComponent = ({style,content}) => {
  return (
    <div>
      <h style={style}>{content}</h>
    </div>
  )
}

export default TextComponent
