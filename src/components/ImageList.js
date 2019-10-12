import React from 'react';
import  '../css/ImageList.css';
import CardImage from "./CardImage";
const ImageList = props => {
    const images = props.images.map((image) => {
        return <CardImage key={image.id} image={image} />
    });
    return (
        <div className={"image-list"}>
            {images}
        </div>
    );
};

export default ImageList;