import './styles.scss';
import ButtonIcon from "core/assets/components/ButtonIcon"

const UserDetails = () => {
    return (
        <div className="second-content">
            <div className="second-content-col1">
                <img
                    src="https://avatars.githubusercontent.com/u/30843415?v=4"
                    className="git-img"
                    alt=""
                />
                <div className="detail-btn" >
                   {/* `https://github.com/${user?.login}` */}
                    <a href="link" target="_new" > 
                        <ButtonIcon text="Ver Perfil" />
                    </a>
                </div>
            </div>
            <div className="second-content-col2 col-9">
                <div className="content-item">
                    <div className="user-item">
                        Repositórios públicos: 62
                     </div>
                    <div className="user-item">
                        Seguidores: 127
                    </div>
                    <div className="user-item">
                        Seguindo: 416
                    </div>
                </div>
                <div className="detail-bottom">
                    <h3 className="user-title">
                        Informações
                    </h3>                    
                    <span className="user-info">
                        <strong>Empresa:</strong> @ZupIT
                    </span>
                    <span className="user-info">
                        <strong>Website/Blog: </strong>
                    </span>
                    <span className="user-info">
                        <strong> Localidade:</strong>
                    </span>
                    <span className="user-info">
                        <strong>Membro desde:</strong>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default UserDetails;