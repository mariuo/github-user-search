import './styles.scss';

const Search = () => {
    return (
        <div className="search-container">
            <div className="search-content">
                <h1 className="row search-title">Encontre um perfil Github</h1>
                <input 
                    className="row search-text"
                    type="text" 
                    id="name" 
                    name="user" 
                    placeholder="Usuário Github"/>
                <button className="row btn btn-primary">
                    Encontrar
                </button>
            </div>
        </div>
    )
}

export default Search;