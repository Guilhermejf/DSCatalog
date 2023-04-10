import { type } from 'os';
import './styles.css';
import { formatePrice } from 'util/formatters';

type Props = {
    price: number;
}

const ProductPrice = ({price} : Props) =>{
    return(
        <>
        <div className='product-price-container'>
            <span>R$</span>
            <h3>{formatePrice(price)}</h3>
        </div>
        </>
        
    );
}

export default ProductPrice;