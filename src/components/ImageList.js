import React from 'react';
import ImageCard from './ImageCard';
import "./ImageList.css";

const ImageList = props => {

    const images = props.images.map(({description,id,urls}) => {

        return <ImageCard description = {description} key = {id} urls = {urls}/>
    })
    return(
        <div className='image-list'>{images}</div>
    )
}

export default ImageList;