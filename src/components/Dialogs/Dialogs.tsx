import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    name: string
    id: number
}
const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/*' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}
const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Ksu'},
        {id: 2, name: 'Kate'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Masha'},
        {id: 5, name: 'Sasha'},
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How a u'},
        {id: 3, message: 'Good'},
        {id: 4, message: 'and u'},
        {id: 5, message: 'Sasha'},
    ]

    let dialogsElements = dialogs.map(dialog => {
        return (
            <DialogItem name={dialog.name} id={dialog.id}/>
        )
    })

    let messagesElements = messages.map(message => {
        return (
            <Message message={message.message}/>
        )
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                {/*<DialogItem name="Anna" id="2"/>*/}
                {/*<DialogItem name="Masha" id="3"/>*/}
                {/*<DialogItem name="Kate" id="3"/>*/}
                {/*<DialogItem name="Danya" id="4"/>*/}
                {/*<DialogItem name="Andrey" id="5"/>*/}
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
                {messagesElements}
                {/*<Message message={messagesData[1].message}/>*/}
                {/*<Message message={messagesData[2].message}/>*/}
                {/*<Message message={messagesData[3].message}/>*/}
                {/*<div className={s.message}>Hi</div>*/}
                {/*<div className={s.message}>How are u</div>*/}
                {/*<div className={s.message}>good</div>*/}
            </div>
        </div>
    );
};

export default Dialogs;