import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';

import 'App.css';
import './styles.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return(
    
    <div className='home-container'> 
        <div className='base-card home-card'>
            <div className='home-content-container'>
                <div>
                <h1>Conheca o melhor catalogo de produtos</h1>
                <p>Ajudaremos você a encontrar os melhores produtos disponiveis no mercado</p>
                
                </div>
                <div>
                <Link to='/products'>
                <ButtonIcon text={"INICIE AGORA A SUA BUSCA"}/>
                </Link> 
                </div>
            </div>
            <div className='home-image-container'>
                <MainImage/>
            </div>
        </div>
    </div>
  
  ); 
}


export default Home;
