import React from 'react';
import './CardView.css';
// import PropTypes from "prop-types"; 
import { AiOutlineLike } from 'react-icons/ai';

const CardView = (props) => {
    return (
        <div className='CardView__wrapper'>
            <img className='CardView__image' src={props.image} alt='' />
            <div className='title-button'>
                <h4>{props.title}</h4>
                <button id='button-like'> <AiOutlineLike /><span>Like</span></button>
            </div>
        </div>

    )
}

// CardView.propTypes = {
//     image:PropTypes.string.isRequired,
//     title:PropTypes.string.isRequired
// }



export default CardView;