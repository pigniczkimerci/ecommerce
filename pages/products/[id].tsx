import { NextPage } from 'next';
import { FormEvent, Fragment, useEffect, useState } from 'react';
// -------- custom component -------- //
import { Footer8 } from 'components/blocks/footer';
import { Navbar } from 'components/blocks/navbar';
import { ProductCard } from 'components/reuseable/product-cards';
import Select from 'components/reuseable/Select';
import Carousel from 'components/reuseable/Carousel';
import ShopService from 'components/common/ShopService';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import Pagination from 'components/reuseable/Pagination';
import ReviewCard from 'components/reuseable/ReviewCard';
import PageProgress from 'components/common/PageProgress';
import ThumbsCarousel from 'components/reuseable/ThumbsCarousel';
// -------- hook -------- //
//import useProgressbar from 'hooks/useProgressbar';
// -------- data -------- //
import data from 'data/product-details-page';
import { useRouter } from 'next/router';
import axios from 'axios';
//TODO: rating
const ProductDetails: NextPage = () => {
  interface Product {
    title: string;
    id: string;
    category: string;
    description: string;
    image: string;
    price: number;
    rating: Array<String>;
  }
  
  //get id from router
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null); 

  useEffect(() => {
    if (id) {
      axios.get('https://fakestoreapi.com/products/' + id)
      .then(function (response) {
        setProduct(response.data as Product)
      }).catch(error => {
        console.log(error);
      });
    }
  }, [id]);
  /* Filling/updating the shopping basket*/
  /*const art = "warenkorb";
  const artnr = product?.id;
  const preis = product?.regularPrice;
  const menge = 1;
  const [cartItems, setCartItems] = useState(null);
  const addToCart = () => {  
    axios.get(``)
      .then((response) => {
        setCartItems(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error adding item to cart:', error);
      });
  };
*/

  const [quantity, setQuantity] = useState(1);
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log();
  };

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar search cart navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light" />
      </header>

      <main className="content-wrapper">
        {/* ========== breadcumb section ========== */}
        <section className="wrapper bg-gray">
          <div className="container py-3 py-md-5">
            {/*<Breadcrumb data={data.breadcrumb} className="mb-0" />*/}
          </div>
        </section>

        {/* ========== product info section ========== */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row gx-md-8 gx-xl-12 gy-8">
              <div className="col-lg-6">
                 <img src={product?.image} alt="product" width="100%"/>
              </div>
              <div className="col-lg-6">
                <div className="post-header mb-5">
                  <h2 className="post-title display-5">
                    <a href="#" className="link-dark">
                       {product?.title}
                    </a>
                  </h2>
                  <p className="price fs-28 mb-5">
                    <span className="amount">{product?.price} Ft</span>
                  </p>
                  
                  <div className="col">
                    </div>
                    <div className="col">
                      <p>{product?.description}</p>
                    </div>
                  </div>
               <form onSubmit={handleFormSubmit}>
               <div className="row">
                    <div className="col-lg-9 d-flex flex-row pt-2">
                      <div>
                        <div className="form-select-wrapper">
                          <select
                            value={quantity}
                            className="form-select"
                            onChange={(e) => setQuantity(+e.currentTarget.value)}
                          >
                            {[1, 2, 3, 4, 5].map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="flex-grow-1 mx-2">
                        {/*onClick={addToCart}*/}
                        <button
                          type="submit"
                          className="btn btn-primary btn-icon btn-icon-start rounded w-100 flex-grow-1"
                        >
                          <i className="uil uil-shopping-bag" /> Kosárba
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
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

export default ProductDetails;
