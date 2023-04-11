import { ReactComponent as ArrowIcon } from "assets/images/arrow.svg";
import ProductPrice from "components/ProductPrice";
import './styles.css';

const ProductDetails = () =>{
    return(
        <div className="product-datails-container">
            <div className="base-card product-datails-card">
                <div className="goback-container">
                    <ArrowIcon/> <h2>VOLTAR</h2>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="img-container">
                            <img src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg" alt="nome"></img>
                        </div>
                        <div className="name-price-container">
                            <h1>Computador Desktop - Intel Core i7</h1>
                            <ProductPrice price={23232} />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="description-container">
                            <h2>Descricão do produto</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dolorem iure dolorum nulla illo consequuntur quod, nihil facilis voluptatem asperiores illum fugit architecto fuga earum vel ad mollitia repellat non?</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductDetails