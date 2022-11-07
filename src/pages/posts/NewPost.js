import React from "react";
import { useNavigate } from "react-router-dom";
import client from "./blogClient";
import PostForm from "./components/PostForm";

function NewPost(){
    const navigate = useNavigate();
    
    const handleSubmit = async ( {title, body}) => {
        await client.post('/posts', { title, body})
        navigate(-1);
    }
    return(
        <div>
            <button 
                className="ui button"
                onClick={() => {
                    navigate(-1);
                }}>
                    Go Back
            </button>
            <h1 className="ui header">Create post</h1>
            <PostForm onSubmit={handleSubmit}/>
        </div>
    )
}

export default NewPost;
