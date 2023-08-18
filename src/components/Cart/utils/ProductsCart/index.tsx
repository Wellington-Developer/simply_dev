// Styles
import './styles.css';

// React Icons
import { AiOutlineDelete } from 'react-icons/ai';

export const ProductCart = () => {
  return (
    <div className="container-product__cart">
      <div className="image-product__cart">
        <img src="https://loja.simply.app.br/arquivos_produtos/159/71468/cde93a9826ac6a605d98acbfe0faed3f20230407234705.jpeg" alt="image product cart"/>
      </div>

      <div className="info-product__cart">
        <p>Vestido longo rosa</p>
        <h1>R$ 89,00</h1>
      </div>
        <div className="controller-product__cart">
          <AiOutlineDelete />
        </div>
    </div>
  )
}