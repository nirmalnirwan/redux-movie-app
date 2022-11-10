import React from 'react';
import { Link } from 'react-router-dom';
import user1 from '../../images/user.png';
import './Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/">
                <div className='logo'>Movie App</div>
            </Link>
            <div className='user-image'>
                <img src={user1} alt="user" />
            </div>
        </div>
    );
};

export default Header;