import { FC, Fragment } from 'react';
import NextLink from './links/NextLink';

// =============================================================
type CollapseProps = {
  id: string;
  title: string;
  applyFilters: (filteredProducts:string) => void;
};
// =============================================================

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
    </Fragment>
  );
};

export default Collapse;