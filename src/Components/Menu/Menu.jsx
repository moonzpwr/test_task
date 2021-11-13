import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { AppBar, Button } from '@mui/material';
import styles from './Menu.module.css';

export default function Menu() {
    return (
        <AppBar sx={{ alignItems: 'center' }}>
            <CSSTransition
                in={true}
                appear={true}
                timeout={500}
                classNames={styles}>
                <ul className={styles.mainMenu}>
                    <li><Link to='auth'><Button variant="contained">Sing in</Button></Link></li>
                    <li><Link to='requests'><Button variant="contained">Posts</Button></Link></li>
                    <li><Link to='range'><Button variant="contained">Range</Button></Link></li>
                </ul>
            </CSSTransition>

        </AppBar>
        
    );
};