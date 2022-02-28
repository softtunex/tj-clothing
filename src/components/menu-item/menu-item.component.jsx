import React from "react";
import "./menu-item.styles.scss"

const MenuItem = ({title, imageUrl, size,linkUrl})=>(
    <div style={{
        backgroundImage:`url(${imageUrl})`
        }} 
        className={`${size} menu-item`} to={`${linkUrl}`}>
            <div className="background-image" style={{
        backgroundImage:`url(${imageUrl})`
        }}/>
                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">shop now</span>
                </div>
            </div>
)
export default MenuItem;