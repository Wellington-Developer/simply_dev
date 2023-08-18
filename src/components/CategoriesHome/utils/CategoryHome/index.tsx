// Styles
import './styles.css';

export const CategoryHome = ({titleCategory, image}: any) => {
  return (
    <div className="container-category__home">
      <div className="image-category__home">
        <img src={image} alt={titleCategory} />
      </div>
      <div className="info-category__home">
        <p>{ titleCategory }</p>
      </div>
    </div>
  )
}