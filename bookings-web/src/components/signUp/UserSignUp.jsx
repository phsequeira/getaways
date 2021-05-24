import React from 'react';
import PropTypes from 'prop-types';

const UserSignUp = ({ newUser, onSubmit, onUserChange }) => (
    <form onSubmit={onSubmit}>
        <label>UserName: </label>
        <input type='text' value={newUser.username} onChange={onUserChange} />
        <label>Email: </label>
        <input type='text' value={newUser.email} onChange={onUserChange} />
        <label>Password: </label>
        <input type='text' value={newUser.password} onChange={onUserChange} />
        <button>Submit</button>
    </form>

)

UserSignUp.propTypes = {
    newUser: PropTypes.objectOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            password: PropTypes.string.isRequired
        })
    ).isRequired,
    onSubmit: PropTypes.func.isRequired,
    onUserChange: PropTypes.func.isRequired
}

export default UserSignUp;
