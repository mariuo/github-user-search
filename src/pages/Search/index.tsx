import ImageLoader from 'core/assets/components/Loaders/ImageLoader';
import InfoLoader from 'core/assets/components/Loaders/InfoLoader';
import './styles.scss';
import React, { useState } from 'react';
import { User } from 'core/types/User';
import ButtonIcon from 'core/assets/components/ButtonIcon';
import UserDetails from './components/UserDetails';
import { makeRequest } from 'core/utils/request';

const Search = () => {
    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState<User>();
    const [isLoading, setIsloading] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    // const handleSubmit2 = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     fetch(`https://api.github.com/users/${search}`)
    //         .then(response => response.json())
    //         .then(userResponse => setUserData(userResponse));
    // }
    // console.log(userData);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsloading(true)
        // console.log(search)
        makeRequest({url: `users/${search}`})        
        .then(response => setUserData(response.data))
        .catch(() => {
            alert('Não achou!')
        })
        .finally(() => {
            setIsloading(false);
        })
    }


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
            {isLoading ? (
                <div className="content-loaders">
                    <ImageLoader />
                    <InfoLoader />
                </div>
            ): ( <>
                   { userData && ( <UserDetails user={userData} />)} 
                 </>
            )}
            
            
        </div>
    )
}

export default Search;