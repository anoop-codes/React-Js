import React from 'react';

const Liked = ({ liked, isLiked }) => {

    let likedClass = 'fa fa-';
    likedClass += liked ? 'heart' : 'heart-o';

    return (
        <i className={likedClass} style={{ cursor: 'pointer' }} onClick={isLiked}></i>
    );
}

export default Liked;