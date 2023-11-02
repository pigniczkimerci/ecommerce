import { FC, useState } from 'react';
import currency from 'utils/currency';
import NextLink from '../links/NextLink';
import ratingGenerate from 'utils/ratings';
import products from 'data/product-list';

// =========================================
type ProductCardProps = {
  image?: string;
  imageUrl?: string;
  title: string;
  new?: boolean;
  sale?: boolean;
  category: string;
  salePrice?: number;
  className?: string;
  regularPrice: number;
  id: string;
  manufacturer: string;
  canbeordered: string;
  deliveryday: string;
};
// =========================================

const ProductCard: FC<ProductCardProps> = (props) => {
  const {id,manufacturer,canbeordered, deliveryday, image, imageUrl, title, new: newProduct, sale, category,  salePrice, regularPrice, className = '' } = props;
 
  const saveProductToLocalStorage = () => {
    // Construct the product object with the details you want to save
    /*const productToSave = {
      id,
      image,
      title,
      category,
      salePrice,
      regularPrice,
      imageUrl,
      manufacturer,
      canbeordered,
      deliveryday,
    };

    // Convert the product object to JSON
    const productJSON = JSON.stringify(productToSave);*/

    // Save the JSON string to localStorage with a unique key (e.g., using the product's ID)
   // localStorage.setItem(`product_${id}`);
  };

 
  const badge = (title: string, color: string) => {
    return (
      <span
        style={{ top: '1rem', left: '1rem' }}
        className={`avatar ${color} text-white w-10 h-10 position-absolute text-uppercase fs-13`}
      >
        <span>{title}</span>
      </span>
    );
  };
  return (
    <div className={`project item ${className}`} >
      <div className="project_item productcard">
        <a href={`/products/${id}`}>
        <figure className="mb-6 position-relative overflow-hidden aspect-ratio-square">
          <img src={imageUrl ? imageUrl : `/img/photos/${image}.jpg`} alt="" />
        </figure>
        </a>
        <div className="post-header">
          <h2 className="post-title h3 fs-18">
            <NextLink title={title} href={`/products/${id}`} className="link-dark" />
          </h2>
          <div className="price_cart row">
            <div className="col">
              <h3 className="price fs-18">
                {salePrice && salePrice > 0 ? (
                  <>
                    <del>
                      <span className="amount">{currency(salePrice)}</span>
                    </del>{' '}
                    <ins>
                      <span className="amount">{regularPrice}</span>
                    </ins>
                  </>
                ) : (
                  <span className="amount">{regularPrice} Ft</span>
                )}
              </h3>
            </div>
            {/*TODO: onclick add to cart*/}
            <div className="col text-end shopping_basket">
              <div className=" button">
                <span className="basket_icon text-center icons">
                  <i className="uil uil-shopping-basket icon-default" ></i>
                  <i className="uil uil-plus icon-hover" ></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductCard;
