import Link from 'next/link';
import Image from 'next/image';
import { FC, Fragment, useEffect, useState } from 'react';
import currency from 'utils/currency';
import NextLink from './links/NextLink';
import axios from 'axios';
import Cart from '../../../pages/cart';

/*interface CartItemListProps {
  cartList: typeof Cart[]; // Assuming Cart is defined somewhere
}*/
// =============================================================
interface ProductType {
  productId: string;
  quantity: number;
}
/*interface CartListItemProps{
  cartId: string;
  userId: string;
  date: Date;
  products: Array<ProductType>;
}*/
interface Cart {
  id: string;
  userId: string;
  date: Date;
  products: Array<ProductType>;
}

interface CartListItemProps {
  cart: Cart |null;
}
interface ProductList {
  title: string;
  productId: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: Array<String>;
  quantity: number;
}
// =============================================================

const CartListItem: FC<CartListItemProps> = (props) => {
  const { cart } = props;
  const [productList, setProductList] = useState<ProductList[]>([]);

useEffect(() => {
  if (cart) {
    const fetchProductDetails = async (productId: string, quantity: number) => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        const productDetails = response.data as ProductList;
        productDetails.quantity = quantity;
        setProductList((prevList) => [...prevList, productDetails]);
      } catch (error) {
        console.error(`Error fetching product details for productId ${productId}:`, error);
      }
    };
    cart.products.forEach((product) => {
      fetchProductDetails(product.productId, product.quantity);
    });
  }
}, [cart ]);
const handleQuantityChange = (index: number,oldPrice: number, newQuantity: number) => {
  console.log(index + " " + newQuantity + " " + oldPrice)
  setProductList((prevList) =>
    prevList.map((product, i) =>
      i === index ? { ...product, quantity: newQuantity, price: oldPrice * newQuantity  } : product
    )
  );
 
};
  return (
    <>
      {productList.map((product, index) => (
        <tr key={index}>
          <td className="option text-start d-flex flex-row align-items-center ps-0">
            <img src={product.image} alt="img" width={'80px'} className='m-1'/>
            <h5 className="product-title">{product.title}</h5>
          </td>

          <td>
            <p className="price">{product.price}$</p>
          </td>

          <td>
            <div className="form-select-wrapper">
              <select
                className="form-select form-select-sm mx-auto"
                defaultValue= {product.quantity}
                onChange={(e) => handleQuantityChange(index, product.price, parseInt(e.target.value))}
              >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </td>

          <td>
            
          </td>

          <td className="pe-0">
            <NextLink title={<i className="uil uil-trash-alt" />} href="#" className="link-dark" />
          </td>
        </tr>
      ))}
    </>
  );
};

export default CartListItem;
