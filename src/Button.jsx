import './styles.css';
import { useState } from 'react'


export default function LikeButton() {
    const [likes, setLikes] = useState(0);
    return (
    
        <button onClick={() => setLikes((likes) => setLikes + 1)}>
            likes is {likes}
        </button>
      
    )
    
}
