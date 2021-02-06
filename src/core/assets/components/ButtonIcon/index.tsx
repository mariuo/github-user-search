import './styles.scss';

type Props ={
    text: string;
}

const ButtonIcon = ({ text }: Props ) => (
    <div className="d-flex">
       <button className="btn btn-primary btn-icon">
           <p>{text}</p>
       </button>       
   </div>
    
);
export default ButtonIcon;
