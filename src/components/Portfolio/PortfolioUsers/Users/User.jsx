import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

export const User = ({id, email, first_name, last_name, avatar, isInvited, onClickInvite}) => {
    return (
        <li>
            <div>
                <img className="avatar" src={avatar} alt="User" />
                <div>
                    <h3>{first_name} {last_name}</h3>
                    <p>{email}</p>
                </div>
            </div>
            <div onClick={() => onClickInvite(id)}>{isInvited ? <FontAwesomeIcon icon={faMinus} size='2x'/> : <FontAwesomeIcon icon={faPlus} size='2x'/>}</div>

        </li>
    );
};