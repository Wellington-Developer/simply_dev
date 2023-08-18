// Styles
import './styles.css';

// React Router Dom
import { Link } from 'react-router-dom';

type LinkButtonHeaderType = {
  title: string,
  icon: any,
  link: string,
}

export const LinkButtonHeader = ({ title, icon, link }: LinkButtonHeaderType) => {
  return (
    <Link to={link}>
      <div className="container-button__header">
      <div className="image-button__header">
        <img src={icon} />
      </div>

      <div className="info-button__header">
        <h1>{ title }</h1>
      </div>

      {
        title === "Carrinho" &&
        <div className="countercart-button__header">
          10
        </div>
      }
    </div>
    </Link>
  )
}