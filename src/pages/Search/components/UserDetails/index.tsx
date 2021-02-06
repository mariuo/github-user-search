import './styles.scss';
import ButtonIcon from "core/assets/components/ButtonIcon"
import { User } from 'core/types/User';
import dayjs from 'dayjs';

type Props = {
    user? : User;
}
const UserDetails = ({user} : Props) => {
    return (
        <div className="second-content">
            <div className="second-content-col1">
                <img
                    src={user?.avatar_url}
                    className="git-img"
                    alt="Foto do user"
                />
                <div className="detail-btn" >
                    <a href={user?.html_url} > 
                        <ButtonIcon text="Ver Perfil" />
                    </a>
                </div>
            </div>
            <div className="second-content-col2 col-9">
                <div className="content-item">
                    <div className="user-item">
                        Repositórios públicos: {user?.public_repos}
                     </div>
                    <div className="user-item">
                        Seguidores: {user?.followers}
                    </div>
                    <div className="user-item">
                        Seguindo: {user?.following}
                    </div>
                </div>
                <div className="detail-bottom">
                    <h3 className="user-title">
                        Informações
                    </h3>                    
                    <span className="user-info">
                        <strong>Empresa:</strong> {user?.company}
                    </span>
                    <span className="user-info">
                        <strong>Website/Blog: </strong> {user?.blog}
                    </span>
                    <span className="user-info">
                        <strong> Localidade:</strong> {user?.location}
                    </span>
                    <span className="user-info">
                        <strong>Membro desde:</strong> {dayjs (user?.created_at).format('DD/MM/YYYY')}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default UserDetails;