// React Components
import { Banner } from "./Banner"
import { CategoriesHome } from "./CategoriesHome"
import { ProductsHome } from "./ProductsHome"
import { TopCallToAction } from "./TopCallToAction"

export const Home = () => {
  return (
    <div className="container-section__home">
      <TopCallToAction />
      <Banner />
      <CategoriesHome />
      <ProductsHome />
      <ProductsHome />
      <ProductsHome />
    </div>
  )
}