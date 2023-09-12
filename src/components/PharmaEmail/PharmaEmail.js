import styles from './styles.module.css';
import { useState } from 'react';
import { HospitalOne } from '../';

export const PharmaEmail = ({closePharma}, {onPassEntry}) => {
    const [text, setText] = useState("");
    const [submitted, setSubmitted] = useState('');
    
    function handleChange(e) {
        setText(e.target.value);
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(text);
        setText("");
        
      }
    
    return <div className = {styles.main}>
    
        <div className={styles.closeButton} onClick = {() => closePharma(false)}> 
            
            </div>

        <div className ={styles.textBox}>
            <form onSubmit = {handleSubmit}>
                <input type = "text" value={text} onChange={handleChange}></input>

            </form>
            submitted: {submitted}
        </div>
        {submitted === 'bob' && <HospitalOne />}
    </div>

};

