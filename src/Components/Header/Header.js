import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import '../Header/Header.css'
import HeaderOption from '../HeaderOption/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { auth } from '../Firebase/Firebase';
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
function Header() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()

    }
    return (
        <div className="header"> 
            <div className="header_left">
                <img src={"https://cdn-icons-png.flaticon.com/512/174/174857.png"} alt=""/>
                <div className="header_search">
                    {/* SeatchIcon */}
                    <SearchIcon />

                    <input type="text" placeholder="Search" />
                </div>

            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Home"/>
                <HeaderOption avatar={
                    user?.photoUrl
                } title="Me" onClick={logoutOfApp} />


            </div>
             
        </div>
    )
}

export default Header
