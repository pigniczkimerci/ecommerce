import { FC } from 'react';
import currency from 'utils/currency';
import NextLink from '../links/NextLink';
import ratingGenerate from 'utils/ratings';

// =========================================
type ProductCardProps = {
  image?: string;
  imageUrl?: string;
  title: string;
  new?: boolean;
  sale?: boolean;
  rating: number;
  category: string;
  salePrice?: number;
  className?: string;
  regularPrice: number;
};
// =========================================

const ProductCard: FC<ProductCardProps> = (props) => {
  const { image, imageUrl, title, new: newProduct, sale, category, salePrice, regularPrice, rating, className = '' } = props;

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
    <div className={`project item ${className}`}>
      <figure className="rounded mb-1 position-relative overflow-hidden aspect-ratio-square">
        <img src={imageUrl ? imageUrl : `/img/photos/${image}.jpg`} alt=""/>
      </figure>

      <div className="post-header">
        <h2 className="post-title h3 fs-14">
          <NextLink title={title} href="#" className="link-dark" />
        </h2>
      </div>
    </div>
  );
};

export default ProductCard;
