import styles from './styles.module.css';

export const FileScreen = ({closeFile}) => {
    return (
        <div className = {styles.main} onClick = {() => closeFile(false)}>
            
        </div>
    );
}