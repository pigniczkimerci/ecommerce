import { FC } from 'react';
import Collapse from 'components/reuseable/Collapse';
// -------- data -------- //

interface ProductType {
  title: string;
  id: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: Array<String>;
}
const collapseList = [
  {
    title: 'Womens clothing',
    id: 'women\'s clothing',
  },
  {
    title: 'Mens clothing',
    id: 'men\'s clothing',
  },
  {
    title: 'Electronics',
    id: 'electronics',
  },
  {
    title: 'Jewelery',
    id: 'jewelery',
    
  }
];

type FilterProps = {
  applyFilters: (filteredProducts: string) => void;
};

const Filter: FC<FilterProps> = ({ applyFilters }) => {
  /*const handleFilters = () => {
    applyFilters(product);
  };*/
  const Title = (title: string) => <h4 className="widget-title mb-3">{title}</h4>;

  return (
    <aside className="col-lg-3 sidebar">
      <div className="widget mt-1">
        <h4 className="widget-title mb-3">Categories</h4>
          {collapseList.map((item) => (
             <Collapse applyFilters={applyFilters} {...item} />
          ))}
      </div>
    </aside>
  );
};

export default Filter;
