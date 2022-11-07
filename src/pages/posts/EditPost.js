import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import client from "./blogClient";
import PostForm from "./components/PostForm";


function EditPost(prps){

    const navigate = useNavigate();
    const params = useParams();
    const [post, setPost] = useState();
    const [lodaing, setLoading] = useState(true);

    useEffect(() => {
        client.get(`/posts/${params.id}`)
            .then((res) => {
                setPost(res.data);
                setLoading(false);
            })
    }, [params.id])
    
    const handleSubmit = ({title, body}) =>{
        client.patch(`posts/${params.id}`, {title, body})
            .then(() => { navigate(-1)})
    }

    if(lodaing){
        return(
            <div className="ui text active loader">Loading...</div>
        )
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
            <h1 className="ui header">Edit post</h1>
            <PostForm onSubmit={handleSubmit} initialValues={post}/>
        </div>
    )
}

export default EditPost;
