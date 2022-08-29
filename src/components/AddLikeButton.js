import React , {useState} from 'react'

const AddLikeButton = (props) => {
    return (
        <button onClick = {props.handleAddClick} className = 'remove'> 👍 </button>
    )
}

export default AddLikeButton 