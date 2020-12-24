import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import logo from '../icons/linkedin.svg';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { auth } from '../firebase';
import { logout } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Header() {
const dispatch=useDispatch();
const user = useSelector(selectUser);

const logoutOfApp=()=>{
dispatch(logout());
auth.signOut();
};

    return (
        <div className="header" style={{display:!user?"none":""}}>
            <div className="header__left">
                <img src={logo} alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar={true} title="Logout" onClick={logoutOfApp}/>
            </div>
        </div>
    )
}

export default Header
