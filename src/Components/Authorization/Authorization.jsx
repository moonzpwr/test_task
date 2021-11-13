
import { useState } from 'react';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import styles from './Authorization.module.css';

export default function Authorization() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(true);

    const onHandlePhoneChange = (e) => {
        setPhone(e.target.value)
    };

    const onHandlePasswordChange = (e) => {
        setPassword(e.target.value)
    };

    const handleClick = (e) => {
        const re = /^[a-zA-Z0-9]+$/
        if (password.length < 4 || !re.test(String(password)) || phone.length !== 19) {
            setIsValid(false)
            e.preventDefault()
        }
    };
    
    return (
        <form className={styles.container}>
            <InputMask mask="+38 (099) 999 99 99" onChange={onHandlePhoneChange} className={styles.tel} />
            <input type="password" autoComplete="off" onChange={onHandlePasswordChange} className={styles.pas} />
            {!isValid && <p className={styles.err}>Invalid phone number or password</p>}
            <Link to='requests' onClick={handleClick}><Button variant="outlined">Submit</Button></Link>
        </form>
    );
};