import React, { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import "./Navbar.scss";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search..' />
          <SearchOutlinedIcon className='icon' />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageOutlinedIcon className='icon' />
            English
          </div>
          <div className='item'>
            <DarkModeOutlinedIcon
              className='icon'
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className='item'>
            <FullscreenExitOutlinedIcon className='icon' />
          </div>
          <div className='item'>
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <ListOutlinedIcon className='icon' />
          </div>
          <div className='item'>
            <img
              src='https://cdn.pixabay.com/photo/2018/08/08/05/12/cat-3591348_960_720.jpg'
              alt='cat'
              className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
