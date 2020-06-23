import React from 'react';
import './CardView.css';

const CardView = (props) => {
    return (
        <div className='CardView__wrapper'>
            <img className='CardView__image' src={props.image} alt='' />
            <div className='title-button'>
                <h4>{props.title}</h4>
                <button>Like</button>
            </div>
        </div>

    )
}

export default CardView;