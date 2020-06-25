import React from 'react';
import style from './Header.module.css';


const Header = () => {
    return (
        <div className={style.wrapper}>
            <h1 className={style.title}> Rick&Morty Wiki</h1>
        </div>
    )
}

export default Header;