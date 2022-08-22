import React, {useEffect, useState} from 'react';
import './index.scss';
import {Users} from "./Users";
import {Success} from "./Success";
import Loader from "react-loaders";
import Title from "../../Title";
import { useGetUsersQuery} from "../../../store/usersApi";

const Index = () => {
    const [users, setUsers] = useState( []);
    const [searchValue, setSearchValue] = useState('');
    const [invites, setInvites] = useState([]);
    const [success, setSuccess] = useState(false);

    const {data, isLoading } = useGetUsersQuery(users);

    useEffect(()=> {
        setUsers(data?.data)
    }, [data]);

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value)
    }

    const onClickInvite = (id) => {
        if(invites.includes(id)) {
            setInvites((prev) => prev.filter(_id => _id !== id));
        } else {
            setInvites(prev => [...prev, id]);
        }
    }

    const onClickSentInvites = () => {
        setSuccess(true);
    }

    return (
        <>
            <Title strArray={['U', 's', 'e', 'r', 's']}/>
            <div className="section">
                <div className='users'>
                    {
                        success ?
                            <Success count={invites.length}/> :
                            <Users
                                items={users}
                                isLoading={isLoading}
                                searchValue={searchValue}
                                onChangeSearchValue={onChangeSearchValue}
                                invites={invites}
                                onClickInvite={onClickInvite}
                                onClickSentInvites={onClickSentInvites}
                            />
                    }
                </div>
            </div>
            <Loader type="pacman" active/>
        </>
    );
};

export default Index;