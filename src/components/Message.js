import React from 'react'

const Message = ({variant, children}) => {
  return (
    // eslint-disable-next-line no-template-curly-in-string
    <div className={'alert alert-${variant}'}>{children}</div>
      
    
  )
}

export default Message
