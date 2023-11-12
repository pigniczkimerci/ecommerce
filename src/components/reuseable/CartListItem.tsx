import Link from 'next/link';
import Image from 'next/image';
import { FC, Fragment, useEffect, useState } from 'react';
import currency from 'utils/currency';
import NextLink from './links/NextLink';
import axios from 'axios';
import Cart from '../../../pages/cart';

interface CartItemListProps {
  cartList: typeof Cart[]; // Assuming Cart is defined somewhere
}
// =============================================================
interface ProductType {
  productId: string;
  quantity: number;
}
interface CartListItemProps{
  cartId: string;
  userId: string;
  date: Date;
  products: Array<ProductType>;
}

interface ProductList {
  title: string;
  productId: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: Array<String>;
}
// =============================================================

const CartListItem: FC<CartListItemProps> = (props) => {
  const { cartId, userId, date, products } = props;
  const [productList, setProductList] = useState<ProductList[]>([]);

useEffect(() => {
  // Function to fetch product details for a given productId
  const fetchProductDetails = async (productId: string) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      console.log(productId)
      const productDetails = response.data as ProductList;
      setProductList((prevList) => [...prevList, productDetails]);
    } catch (error) {
      console.error(`Error fetching product details for productId ${productId}:`, error);
    }
  };
  products.forEach((product) => {
    fetchProductDetails(product.productId);
  });
}, [products]);

  return (
    <tr>
    {productList.map((product) => (
      <Fragment key={product.productId}>
        <td className="option text-start d-flex flex-row align-items-center ps-0">
          <figure className="rounded w-17">
            <Link href="#">
              <a>
                {/*<Image width={90} height={100} src={product.image} alt={product.title} /> */}
              </a>
            </Link>
          </figure>

          <div className="w-100 ms-4">
            <h5 className="product-title">{product.title}</h5>
            <p className="product-category">{product.category}</p>
            <p className="product-description">{product.description}</p>
          </div>
        </td>

        <td>
          <p className="price">{currency(product.price)}</p>
        </td>

        <td>
          <div className="form-select-wrapper">
            <select className="form-select form-select-sm mx-auto" defaultValue={1}>
              {[1, 2, 3, 4, 5].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </td>

        <td>
          {/* Render the total price or any other product-specific information */}
        </td>

        <td className="pe-0">
          <NextLink title={<i className="uil uil-trash-alt" />} href="#" className="link-dark" />
        </td>
      </Fragment>
    ))}
  </tr>
  );
};

export default CartListItem;
