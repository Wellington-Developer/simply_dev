// Styles
import './styles.css';

// Assets
import CartIcon from '../../../../../assets/icons/cart.svg';

export const ButtonAddCart = () => {
  return (
    <button className="button-add__cart">
      <img src={ CartIcon } alt="cart icon" />
      Adicionar
    </button>
  )
}