import './index.scss';
import { Link } from 'react-router-dom';

export default function Page404(){

    return(

        <div className='pagina-erro'>

            <Link to='/' id='button-voltar'>Voltar</Link>

            <figure>
                <img src='/assets/images/image404.png' alt='imagem erro 404'/>
            </figure>
        </div>
    );
}