import React from 'react';
import faker from "faker";

const CommentDetail = (prop) => {
    const { author } = prop;
    const getTime = () => {
        return new Date().toLocaleTimeString();
    };
    return (
        <div className="comment">
            <a href="/" className="avatar"><img src={faker.image.avatar()} alt="avatar"/></a>
            <div className="content">
                <a href="/" className="author">{author}</a>
                <div className="metadata">
                    <span className="date">Today at {getTime()}</span>
                </div>
                <div className="text">
                    Nice Blog post!
                </div>
            </div>
        </div>
    );
};

export default CommentDetail;
