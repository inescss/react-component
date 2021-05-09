import React from 'react'
import image from "../../image/im1.jpg";
import './ProfilePhoto.css';
const ProfilePhoto = () => {
    return (
        <div className="imagee" style={{textAlign: "center" }}>
            
            <img src={image} width="200" className="imagee"  alt="" />  
            
        </div>
    )
}

export default ProfilePhoto
