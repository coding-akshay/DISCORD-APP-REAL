import React from 'react'

function PostBox(props) {

  if(props.isLoggedIn){
    return (
        <h3 id='transaction-h3'>{props.hedding}</h3>
    )
    
  }
}

export default PostBox
