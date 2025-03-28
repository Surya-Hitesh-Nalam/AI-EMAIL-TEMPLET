import React from 'react'

const LogoComponent = ({style,imageUrl,outerStyle}) => {
  return (
    <div>
      <img src={imageUrl} alt="logo" style={style} />
    </div>
  )
}

export default LogoComponent
