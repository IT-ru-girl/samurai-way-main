import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props:any ) => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add posts</button>
                </div>
            </div>
            <div>
                new post
            </div>
            <div className={s.posts}>
                <Post message='Hi.how are u' likeCount={15} />
                <Post message='its my first post' likeCount={20}/>
            </div>
        </div>

    );
};

export default MyPosts;