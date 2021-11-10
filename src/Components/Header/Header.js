import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import '../Header/Header.css'

function Header() {
    return (
        <div className="header"> 
            <div className="header_left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/>
                <div className="header_search">
                    {/* SeatchIcon */}
                    <SearchIcon />

                    <input type="text"/>
                </div>

            </div>
            <div className="header_right">

            </div>
             
        </div>
    )
}

export default Header
