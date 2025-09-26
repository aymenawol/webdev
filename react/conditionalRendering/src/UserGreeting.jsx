import propTypes from 'prop-types';
function UserGreeting(props) {
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const logInPrompt =  <h2 className="log-in-prompt">Please Log in to continue</h2>
    return(props.isLoggedIn ? welcomeMessage:logInPrompt)
}

UserGreeting.propTypes = {
    isLoggedIn: propTypes.bool,
    username: propTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn:false,
    username:"Guest",
}

export default UserGreeting