import React , {useState} from 'react'

const RemoveLikeButton = (props) => {
    return (
        <button onClick = {props.handleRemoveClick} className = 'remove'> 👎 </button>
    )

}

export default RemoveLikeButton 