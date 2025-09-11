import React, { useEffect } from 'react'
import ProductCard from '../components/Route/ProductCard/ProductCard';
import { productData } from '../static/data';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import styles from "../styles/styles";
const ProductPage = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const [data, setData] = React.useState([]);
    useEffect(() => {
        category==null ?
            setData(productData.sort((a,b) => new Date(b.totalSell) - new Date(a.totalSell)))
        :
            setData(productData.filter(i => i.category === category).sort((a,b) => new Date(b.totalSell) - new Date(a.totalSell)));
    });
  return (
    <div>
      <Header activeHeading={3} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No products Found!
          </h1>
        ) : null}
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage