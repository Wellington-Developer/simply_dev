// Styles
import './styles.css';

// Utils React Components
import { CategoryHome } from "./utils/CategoryHome"

export const CategoriesHome = () => {
  return (
    <div className="container-categories__home">
      <CategoryHome titleCategory="30% OFF" image="https://loja.simply.app.br/arquivo_back/159/categoria/cbd00bf265e38e1df49312e385b6ea2320230310150657.png" />
      <CategoryHome titleCategory="Mens" image="https://loja.simply.app.br/arquivo_back/159/categoria/a0be4117d5ac8c842170c7491f19099320230310150820.png" />
      <CategoryHome titleCategory="Womans" image="https://loja.simply.app.br/arquivo_back/159/categoria/83c9ba6851191a44c1cfcdb23b74022020230310151045.png" />
    </div>
  )
}