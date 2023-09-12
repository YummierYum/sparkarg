import styles from './styles.module.css';

export const JohnEmail = ({closeJohn}) => {
    return <div className = {styles.main}>
        <div className = {styles.closeButton} onClick = {() => closeJohn(false)}>

        </div>
    </div>

};