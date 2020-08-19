import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, useHistory } from "react-router-dom";
function Header({backButton}) {
    const history =  useHistory();
    return (
      <div className="header">
        <IconButton onClick = {()=> history.replace(backButton)}>
          {backButton ? (
            <ArrowBackIcon fontSize="large" className="header__icon" />
          ) : (
             <PersonIcon fontSize="large" className="header__icon" />
          )}
        </IconButton>
        <Link to ="/">
        <img
          className="header__logo"
          src="https://icons-for-free.com/download-icon-colored+gradient+media+social+social+media+tinder+icon-1320192522554159603_512.png"
          alt="tinder logo"
        />
         </Link>
        <Link to="/chats">
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </Link>
      </div>
    );
}

export default Header
