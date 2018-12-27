import React from 'react';

const movies = (props) => {
    const {info} = props;
    console.log(info);
    return(
        <div>
            <img src={info['im:image'][2].label}></img>
            <h3>{info['title'].label}</h3>
            <p>{info['summary'].label}</p>
        </div>
    )
};

export default movies;