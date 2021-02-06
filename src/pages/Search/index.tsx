import ImageLoader from 'core/assets/components/Loaders/ImageLoader';
import InfoLoader from 'core/assets/components/Loaders/InfoLoader';
import './styles.scss';
import React, { useState } from 'react';
import GithubImage from 'core/github-mark.png';
import { User } from 'core/types/User';
import ButtonIcon from 'core/assets/components/ButtonIcon';
import UserDetails from './components/UserDetails';

const Search = () => {
    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState<User>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch(`https://api.github.com/users/${search}`)
            .then(response => response.json())
            .then(userResponse => setUserData(userResponse));
    }
    // console.log(userData);

    return (
        <div className="search-container">
            <div className="search-content">
                <h1 className="search-title">
                    Encontre um perfil Github
                </h1>
                <form onSubmit={handleSubmit}>
                    <input
                        className="form-control search-text"
                        type="text"
                        placeholder="Usuário Github"
                        required
                        onChange={handleChange}
                    />
                    <ButtonIcon text="Encontrar" />
                </form>
            </div>
            <UserDetails />
            <div>
                {userData && (
                    <img
                        src={userData?.avatar_url}
                        className="responsive rounded-circle"
                        alt=""
                        height="200px"
                    />
                )}
            </div>
        </div>
    )
}

export default Search;