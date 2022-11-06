import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

type MyPostsPropsType = {}

const MyPosts = (props: MyPostsPropsType) => {

    let posts = [
        {id: 1, message: 'Hi', likesCount: 10},
        {id: 2, message: 'How a u', likesCount: 16},
        {id: 3, message: 'Good', likesCount: 18},
        {id: 4, message: 'and u', likesCount: 19},
        {id: 5, message: 'Sasha', likesCount: 20},
    ]
    let postsElements = posts.map(post => {
        return (
            <Post message={post.message} likeCount={post.likesCount}/>
        )
    })


    return(
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
                {postsElements}
                {/*<Post message={posts[1].message} likeCount={posts[1].likesCount} />*/}
                {/*<Post message={posts[2].message} likeCount={posts[2].likesCount} />*/}
                {/*<Post message={posts[3].message} likeCount={posts[3].likesCount} />*/}
                {/*<Post message={posts[4].message} likeCount={posts[4].likesCount} />*/}
            </div>
        </div>
    );
};

export default MyPosts;