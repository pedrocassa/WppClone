import { Route, Switch, Redirect } from 'react-router-dom'
import LoginForm from './components/LoginForm/LoginForm'
import ChatBox from './components/ChatBox/ChatBox'
import { isAuthenticated } from './authentication'
import { useContext } from 'react'
import { userContext } from './context/userContext';

function PrivateRoute({ component: Component, ...rest }) {
    const user = useContext(userContext)
    return (
        <Route {...rest} render={props => (
            isAuthenticated(user.id) ? (<Component {...props} />) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
        )} />
    );
}

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={LoginForm} />
            <PrivateRoute exact path="/chat" component={ChatBox} />
        </Switch>
    );
}