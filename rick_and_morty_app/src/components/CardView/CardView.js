import React from 'react';
import style from  './CardView.module.css';
import PropTypes from "prop-types"; 
import { AiOutlineLike } from 'react-icons/ai';

const CardView = (props) => {
    return (
        <div className={style.wrapper}>
            <img className={style.image} src={props.image} alt='' />
            <div className={style.title_button}>
                <h4>{props.title}</h4>
                <button id={style.button_like}> <AiOutlineLike /><span>Like</span></button>
            </div>
        </div>

    )
}

CardView.propTypes = {
    image:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
}



export default CardView;