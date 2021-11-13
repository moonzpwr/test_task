import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './Posts.module.css';


export default function Posts() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(res => res.json())
            .then(result => {
                setIsLoaded(true)
                setItems(result)
            },
                error => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, []);

    const handleBlur = (e) => {
        if (e.target.value) {
            fetch(`https://jsonplaceholder.typicode.com/users/${e.target.value}/posts`)
                .then(res => res.json())
                .then(result => {
                    setItems(result)
                })
        }
    };
    
    if (error) {
        return (<p className={styles.container} className={styles.err}>Error: {error.message}</p>);
    } else if (!isLoaded) {
        return (<p className={styles.container}>Loading...</p>);
    } else {
        return (
            <div className={styles.container}>
                <TextField label="User ID" variant="outlined" onBlur={handleBlur} />
                <TransitionGroup component='ul' className={styles.listContainer}>
                    {items.map(({ id, title, body } = {}) => {
                        return (
                            <CSSTransition key={id} timeout={500} classNames={styles}>
                                <li key={id} className={styles.item}>
                                    <p className={styles.title}>{title}</p>
                                    <p className={styles.body}>{body}</p>
                                </li>
                            </CSSTransition>
                        )
                    }
                    )}
                </TransitionGroup>
            </div>
        );
    };
}