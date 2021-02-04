import './styles.css';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Desafio do Capítulo 3, <br />Bootcamp DevSuperior</h1>
            <p className="home-text"> 
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br /><br />
                Favor observar as instruções passadas no capítulo sobre a elaboração <br />deste projeto.<br /><br />
                Este design foi adaptado a partir de Ant Design System for Figma, de <br />
                Mateusz Wierzbicki: <a href="mailto:antforfigma@gmail.com">antforfigma@gmail.com</a>
            </p>
            <Link to="/search">
                <button className="btn btn-primary">
                        Começar
                 </button>
            </Link>
        </div>
    )
}
export default Home;