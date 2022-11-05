import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfleInfo';

const Profile = () => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};

export default Profile;