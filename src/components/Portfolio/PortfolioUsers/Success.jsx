import React from 'react';
import successImg from '../../../assets/images/success.svg';

export const Success = ({ count }) => {
    return (
        <div className="success-block">
            <img src={successImg} alt="Success" />
            <h3>Successfully!</h3>
            <p>All {count} user{count === 1 ? '' : 's'} have been invited.</p>
            <button onClick={() => window.location.reload()} className="send-invite-btn">Back</button>
        </div>
    );
};