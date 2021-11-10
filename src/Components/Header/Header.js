import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header"> 
            <h2>This is the header</h2>
            <div className="header_left">
                <img src="" alt=""/>
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
