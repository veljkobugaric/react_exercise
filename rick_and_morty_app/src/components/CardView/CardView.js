import React from 'react';

const CardView = (props) => {
    return (
        <div className='CardView__wrapper'>
            <img src={props.image} alt='photo' />
            <h4>{props.name}</h4>
        </div>
    )
}

export { CardView };