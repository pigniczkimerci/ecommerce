import { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';
// -------- custom component -------- //
import Filter from 'components/common/Filter';
import Select from 'components/reuseable/Select';
import ShopService from 'components/common/ShopService';
import Pagination from 'components/reuseable/Pagination';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import PageProgress from 'components/common/PageProgress';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import { ProductCard } from 'components/reuseable/product-cards';
// -------- data -------- //
import products from 'data/product-list';
import axios from 'axios';
import { title } from 'process';

const ShopTwo: NextPage = () => {

const [product, setProduct] = useState<ProductType[]>([]);
const [sortingOption, setSortingOption] = useState('asc')

interface ProductType {
  title: string;
  id: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: Array<String>;
}
useEffect(() => {
  console.log(sortingOption)
  axios
    .get(`https://fakestoreapi.com/products?sort=${sortingOption}`)
    .then(function (response) {
      setProduct(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}, [sortingOption]);

const handleSortingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedOption = event.target.value;
  console.log()
  setSortingOption(selectedOption);
};
const applyFilters = (category: string) => {
  console.log(category)
  axios
    .get(`https://fakestoreapi.com/products/category/${category}`)
    .then(function (response) {
      setProduct(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};
  // filter options
  const options = [
    { id: 1, title: 'Sort by asc', value: 'asc' },
    { id: 2, title: 'Sort by desc', value: 'desc' },
  ];
  return (
    <Fragment>
        <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar search cart navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light" />
      </header>

      <main className="content-wrapper">
        {/* ========== breadcrumb section ========== */}
        <section className="wrapper bg-gray">
          <div className="container py-3 py-md-5">
            <Breadcrumb className="mb-0" />
          </div>
        </section>

        {/* ========== products section ========== */}
        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16 pt-12">
            <div className="row gy-10">
              <div className="col-lg-9 order-lg-2">
                <div className="row align-items-center mb-10 position-relative zindex-1">
                  <div className="col-md-7 col-xl-8 pe-xl-20">
                    <h2 className="display-6 mb-1">New Arrivals</h2>
                    <p className="mb-0 text-muted">Showing 1–9 of 30 results</p>
                  </div>

                  <div className="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
                  <select className="form-select" onChange={handleSortingChange}>
                    {options.map(({ value, id, title }) => (
                      <option value={value} key={id}>
                        {title}
                      </option>
                    ))}
                  </select>
                  </div>
                </div>

                <div className="row gx-md-8 gy-10 gy-md-13 mb-10">
                 {product.map((item) => (
                    <ProductCard imageUrl={item.image} title={item.title} category={item.category} regularPrice={item.price} id={item.id} manufacturer={''} canbeordered={''} deliveryday={''} className="col-md-6 col-xl-4" />
                 ))}
                </div>

                {/* ========== pagination section ========== */}
                <Pagination />
              </div>

              {/* ========== filter sidebar section ========== */}
              <Filter applyFilters={applyFilters}/>
            </div>
          </div>
        </section>

        {/* ========== service section ========== */}
        <ShopService />
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default ShopTwo;
