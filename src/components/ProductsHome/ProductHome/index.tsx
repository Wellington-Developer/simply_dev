// Styles
import { ButtonAddCart } from './Utils/ButtonAddCart'
import './styles.css'

export const ProductHome = ({ resolutionImage }: any) => {
  return (
    <div className="container-product__home">
      <div className={`image-product__home ${resolutionImage}`} style={{ backgroundImage: `url(${"https://loja.simply.app.br/arquivos_produtos/159/71467/3b64b7ed780d0f1575ebf71a70c1986420230407234751.jpeg"})`}}>
      </div>
      <div className="info-product__home">
        <div className="name-product__home">
          <p>Vestido Comum</p>
        </div>
        <div className="price-product__home">
          <h1>R$ 129,00</h1>
          <span>R$ 135,00</span>
        </div>
        <ButtonAddCart />
      </div>
    </div>
  )
}