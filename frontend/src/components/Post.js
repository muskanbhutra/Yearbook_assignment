import React from 'react'
import "./Posts.css";

const Post = () => {
    return (
        <div className="img-post">
        <div classNameName="pfp-row">
            
            <p>Muskan Bhutra</p>
        </div>
        <div className="text-area">
            <p>
                TRIAL
            </p>
        </div>
        <div className="button-row">
            <div className="btn">
                <i className="fa-solid fa-user"></i>
                Like
            </div>
            <div className="btn">
                <i className="fa-solid fa-thumbs-up"></i>
                Share
            </div>
            <div className="btn">
                <i className="fa-solid fa-thumbs-up"></i>
                Comment
            </div>
            <div className="btn">
                <i className="fa-solid fa-thumbs-up"></i>
                Toggle Comment
            </div>
            <div className="btn">
                <i className="fa-solid fa-thumbs-up"></i>
                Post Yours
            </div>
        </div>
        <br/>
        <div className="details">
            <div className="timestamp">
                Monday,25/01/2022,10:35 PM
            </div>
        </div>
        </div>
    )
}
export default Post;