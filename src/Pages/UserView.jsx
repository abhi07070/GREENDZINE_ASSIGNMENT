import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UilSearch } from '@iconscout/react-unicons'

const UserView = () => {
    const [postInfo, setPostInfo] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=2")
            .then(response => {
                setPostInfo(response.data.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredUsers = postInfo.filter(user => {
        return user.first_name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className='container'>
            <div className='mw'>
                <div className='search'>
                    <input type="text" value={searchTerm} onChange={handleSearch} />
                    <div className='searchIcon'>
                        <UilSearch />
                    </div>
                </div>
                <div className='grid'>
                    {filteredUsers.map((data, key) => (
                        <div className='flex' key={key}>
                            <div className='border'>
                                <div className='ids'>{data.id}</div>
                                <img src={data.avatar} alt="" />
                            </div>
                            <h3>{data.first_name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserView;
