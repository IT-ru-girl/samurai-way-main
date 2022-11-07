import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfleInfo';
import {ArrayPostsType2} from '../../App';

type PostsType ={
    posts: Array<ArrayPostsType2>

}

const Profile = (props: PostsType) => {


    return (
        <div >
            <ProfileInfo/>
            <MyPosts posts={props.posts}  />
        </div>
    );
};

export default Profile;