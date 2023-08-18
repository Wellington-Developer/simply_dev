// Styles
import './styles.css';

// React Components
import { InfoClient } from "../InfoClient";
import { ProductCart } from './utils/ProductsCart';
import { ButtonAddCart } from '../ProductsHome/ProductHome/Utils/ButtonAddCart';


export const Cart = () => {
  const userAtive = localStorage.getItem("user-active");

  return (
    userAtive ? (
      <div className="container-section__cart">
        <div className="left-side__cart">
          <h2>Produtos adicionados</h2>
          <div className="product-side__cart">
          <ProductCart />
          </div>
        </div>

        <div className="right-side__cart">
          <h2>Resumo do pedido</h2>
          <div className="product-discount__cart">
              <input
                type="text"
                placeholder="Cupom de desconto"
              />
          </div>

          <div className="quicly-resume__cart">
              <h4>Desconto:</h4>
              <h3>R$ 20</h3>
          </div>

          <div className="quicly-resume__cart">
              <h4>Total:</h4>
              <h3>30</h3>
          </div>

          <div className="button">
            <ButtonAddCart />
            <ButtonAddCart />
          </div>
        </div>
      </div>
    ) : (
      <InfoClient />
    )
  )
}