import './styles.css';



import ProductImg from 'assets/images/product.png';


const ProductCard = () => {
    return (
       
        <div className="product-card">
            <div className="card-top-container">
                <img src={ProductImg} alt="Nome do produto" />
            </div>
            <div className="card-bottom-container">
                <h6>Audi Supra TT</h6>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</h3>
                <button>COMPRAR</button>
            </div>
        </div>
    );
}

export default ProductCard;