import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

export type DataPropsType = {
    posts: Array<ArrayPostsType2>
    dialogs: Array<ArrayDialogsType2>
    messages: Array<ArrayMessagesType2>

}

export type ArrayPostsType2 = {
    id: number,
    message: string,
    likesCount: number
}

export type ArrayDialogsType2 = {
    id: number,
    name: string
}


export type ArrayMessagesType2 = {
    id: number,
    message: string
}

function App(props: DataPropsType) {

    let dialogsComponent = () => <Dialogs dialogs={props.dialogs} messages={props.messages}/>


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    {/*<Route path="/dialogs" component={Dialogs}/>*/}
                    {/*<Route path="/profile" component={Profile}/>*/}

                    <Route path="/dialogs" render={dialogsComponent}/>
                    <Route path="/profile" render={() => <Profile posts={props.posts}/>}/>

                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    {/*<Dialogs/>*/}
                    {/*<Profile/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
