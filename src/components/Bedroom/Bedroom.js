import {useState} from 'react';
import styles from './styles.module.css';
import { EmailHome } from '../';
import { FileScreen } from '../';



export const Bedroom = () => {
    const [openEmail, setOpenEmail] = useState(false)
    const [openFile, setOpenFile] = useState(false)
    return (
    <div className = {styles.main}>
        <div className = {styles.pictureBox}>
            <span class = {styles.pictureText}> bottom text</span>
        </div>

        <div className = {styles.conspiracyBox}>
            <span class = {styles.conspiracyText}>bottom texy</span>
        </div>

        <div className = {styles.pillBox}>
            <span class = {styles.pillText}> bottom text</span>
        </div>
        

        <div className = {styles.fileButton} onClick ={() => {setOpenFile(true)}}> 
            <span class = {styles.fileText}> bottom text</span>
        </div>
        {openFile && <FileScreen closeFile={setOpenFile}/>}
        

        <div className = {styles.emailButton} onClick ={() => {setOpenEmail(true)}}>
            <span class = {styles.emailText}> bottom text</span> 
        </div>
        {openEmail && <EmailHome closeEmail={setOpenEmail}/>}
        

         </div>
    );


};