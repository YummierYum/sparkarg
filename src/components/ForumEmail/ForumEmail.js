import styles from './styles.module.css';

export const ForumEmail = ({closeForum}) => {
    return <div className = {styles.main}>
        <div className = {styles.closeButton} onClick = {() => closeForum(false)}>

        </div>
        
    </div>

};