import { Switch, Route } from 'react-router';
import { CSSTransition } from 'react-transition-group';
import Menu from './Components/Menu/Menu';
import Authorization from './Components/Authorization/Authorization';
import Posts from './Components/Posts/Posts';
import Range from './Components/Range/Range';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.container}>
      <Menu/>
      <Switch >
        <Route path="/" exact>
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames={styles}>
            <h1>Welcome!</h1>
          </CSSTransition>
        </Route>
        <Route path="/auth" component={Authorization} />
        <Route path="/requests" component={Posts}/>
        <Route path="/range" component={Range}/>
        <Route>
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames={styles}>
              <h1>Oops! Please choose one of menu item!</h1>
          </CSSTransition>
        </Route>
      </Switch >
    </div>
  );
};