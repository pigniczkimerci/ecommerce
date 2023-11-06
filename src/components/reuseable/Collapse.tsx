import { FC, Fragment } from 'react';
import NextLink from './links/NextLink';

// =============================================================

interface ProductType {
  title: string;
  id: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: Array<String>;
}

type CollapseProps = {
  id: string;
  title: string;
  applyFilters: (filteredProducts:string) => void;
};
// =============================================================
const product = [
  { id: '1', title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', category: "men's clothing", description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", price: 109.95, rating: ["d"] },
];
const Collapse: FC<CollapseProps> = (props) => {
  const { id, title, applyFilters } = props;
  const handleFilters = () => {
    applyFilters(id);
  };
  return (
    <Fragment>
      <div className=" align-items-center rounded link-body mt-1" >
        <ul className="btn-toggle-nav list-unstyled ps-2">
            <li key={id} onClick={handleFilters}>
                <NextLink title={title} href={''} className="link-body" />
            </li>
        </ul>
      </div>

      {/*<div className={`collapse mt-1`} id={id}>
        <ul className="btn-toggle-nav list-unstyled ps-2">
            <li key={id} onClick={handleFilters}>
                <NextLink title={title} href={''} className="link-body" />
            </li>
        </ul>
  </div>*/}
    </Fragment>
  );
};

export default Collapse;