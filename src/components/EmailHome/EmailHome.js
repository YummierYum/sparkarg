import styles from './styles.module.css';
import { useState } from 'react';
import { PsychEmail } from '../';
import { ForumEmail } from '../';
import { JohnEmail } from '../';
import { PharmaEmail } from '../';



export const EmailHome = ({ closeEmail }) => {

    const [pharma, openPharma] = useState(false);
    const [forum, openForum] = useState(false);
    const [john, openJohn] = useState(false);
    const [psychiatrist, openPsychiatrist] = useState(false);

    return <div className = {styles.main}>
        
        <div className={styles.closeButton} onClick = {() => closeEmail(false)}> 
        
        </div>

        <div className = {styles.pharmaButton} onClick ={() => {openPharma(true);}}></div>
        {pharma && <PharmaEmail closePharma={openPharma}/>}
        
        <div className = {styles.forumButton} onClick ={() => {openForum(true)}} ></div>
        {forum && <ForumEmail closeForum={openForum}/>}

        <div className = {styles.johnButton} onClick ={() => {openJohn(true)}}></div>
        {john && <JohnEmail closeJohn={openJohn}/>}

        <div className = {styles.psychiatristButton} onClick ={() => {openPsychiatrist(true)}}></div>
        {psychiatrist && <PsychEmail closePysch={openPsychiatrist}/>}
    </div>

};