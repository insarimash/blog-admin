import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "./blogClient";
import BlogList from "./BlogList";

function Posts(){
    const [response, setResponse] = useState();
    const [update, setUpdate] = useState(false);
    const getUpdate = () => {
        return update;
    }
    


    useEffect(() =>{
        const search = async () => {
            const response = await client.get('/posts')
            // setResponse(response.data)
            setResponse(response.data);
        }
        search();
    },[update])

    

    return(
        <div>
            <Link to={'/posts/new'}>
                <button className="ui primary basic button">NewPost</button>
            </Link>
            <BlogList list={response} setUpdate = {setUpdate} getUpdate = {getUpdate} />
        </div>
    )
}

export default Posts;