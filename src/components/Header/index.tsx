// Assets
import CartIcon from '../../assets/icons/cart.svg';
import MenuIcon from '../../assets/icons/menu.svg';
import HomeIcon from '../../assets/icons/home.svg';
import SearchIcon from '../../assets/icons/search.svg';

// Styles
import './styles.css';

// React Components
import { LinkButtonHeader } from './utils/LinkButtonHeader';

export const Header = () => {
  return (
    <header>
      <div className="section-container__header">
        <div className="logo-side__header">
          
        </div>

        <div className="options-side__header">
          <LinkButtonHeader title="Homepage" link="/" icon={ HomeIcon }/>
          <LinkButtonHeader title="Carrinho" link="/cart" icon={ CartIcon }/>
          <LinkButtonHeader title="Categorias" link="/categories" icon={ MenuIcon }/>
        <LinkButtonHeader title="Pesquisar" link="" icon={SearchIcon} />
        </div>
      </div>

      <div className="search-side__header">
      </div>
    </header>
  )
}