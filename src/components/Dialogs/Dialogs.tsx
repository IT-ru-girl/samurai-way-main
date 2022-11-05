import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/*' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message=(props)=>{
    return(
        <div className={s.dialog}>{props.message}</div>
    )
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dima" id="1"/>
                <DialogItem name="Anna" id="2"/>
                <DialogItem name="Masha" id="3"/>
                <DialogItem name="Kate" id="3"/>
                <DialogItem name="Danya" id="4"/>
                <DialogItem name="Andrey" id="5"/>
                {/*<div className={s.dialog + ' ' + s.active}>*/}
                {/*    <NavLink to={'/dialogs/1'+ props.id}>{props.name}</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to='/dialogs/2' >Anna</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to='/dialogs/3' >Masha</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to='/dialogs/4' >Kate</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to='/dialogs/5' >Danya</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to='/dialogs/6' >Andrey</NavLink>*/}
                {/*</div>*/}
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How r u'/>
                <Message message='good'/>
                <Message message='good'/>
                {/*<div className={s.message}>Hi</div>*/}
                {/*<div className={s.message}>How are u</div>*/}
                {/*<div className={s.message}>good</div>*/}
            </div>
        </div>
    );
};

export default Dialogs;