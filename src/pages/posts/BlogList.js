import React, { useState } from "react";
import BlogItem from "./BlogItem";

function BlogList({list, setUpdate, getUpdate}){

    let newlist;
    if(list){
        newlist = list.map((item) => {
            return(<BlogItem title = {item.title} date = {item.createdAt} id = {item._id} setUpdate={setUpdate} update = {getUpdate()}/>)
        })
    }
    console.log(list)
    return(
        <table className="ui celled table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Created at</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {true && newlist}  
            </tbody>
        </table>
    )

}

export default BlogList;
