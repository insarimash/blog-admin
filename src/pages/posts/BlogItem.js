import React from "react";
import client from "./blogClient";
import { Link } from "react-router-dom";

function BlogItem({title, date, id, setUpdate, update}){

        const onDelete = async (e) => {
                if (window.confirm('Are u sure to delete this post')){
                        await client.delete(`/posts/${id}`)
                        setUpdate(!update);
                }
        }
        return(
            <tr>
                <td datalsabel="Name">{title}</td>
                <td datalsabel="Age">{date}</td>
                <td datalsabel="Job">
                        <button className="ui negative basic button"
                                onClick={onDelete}>
                                Delete
                        </button>
                        <button className="ui primary basic button">
                                <Link to={`/posts/${id}`}>
                                        Edit
                                </Link>
                        </button>
                </td>
            </tr>
        )
}

export default BlogItem;

