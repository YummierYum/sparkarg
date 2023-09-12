import styles from './styles.module.css';

export const PsychEmail = ({closePysch}) => {
    return <div className = {styles.main}>
        <div className={styles.closeButton} onClick = {() => closePysch(false)}> 
            
        </div>

    </div>

};