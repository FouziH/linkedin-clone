import React from 'react'
import "../Widgets/Widgets.css"
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"

function Widgets() {

    const newsArticles  =(heading, subtitle) => {
        return <div className="widgets_article">
            <div className="widgets_articlesLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_articlesRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    }
    return (
        <div className="widgets">
           <div className="widgets_header">
               <h2>LinkedIn News</h2>
               <InfoIcon />
           </div>
            {newsArticles("PAPA React is back", "Top news - 9099 readers")}
             {newsArticles("Coronavirus: UK updates", "Top news - 886 readers")}
              {newsArticles("Tesla hits new highs", "Cars & Auto - 300 readers")}
               {newsArticles("Bitcoin Breaks $22k", "Crypto - 123 readers")}
                {newsArticles("PAPA React is back", "Top news - 9099 readers")}
                 {newsArticles("PAPA React is back", "Top news - 9099 readers")}
        </div>
    )
}

export default Widgets
