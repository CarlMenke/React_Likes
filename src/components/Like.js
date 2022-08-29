import React , {useState} from 'react'
import AddLikeButton from './AddLikeButton'
import RemoveLikeButton from './RemoveLikeButton'

const Like = () => {
    const [likes , manageLikes] = useState(0);

    const handleAddClick = () => {
        let newLikes = likes + 1;
        manageLikes(newLikes)
    }

    const handleRemoveClick = () => {
        if(likes > 0){
        let newLikes = likes - 1;
        manageLikes(newLikes)
        }
    }

    return(
        <div className = 'column'>
            {likes}
            <div class = 'row'>
            <AddLikeButton likes = {likes} handleAddClick = {handleAddClick} />
            <RemoveLikeButton likes = {likes} handleRemoveClick = {handleRemoveClick}/> 
            </div>
        
        </div>)
}

export default Like 