import { FC, ReactElement } from 'react';
import { Counter3 } from 'components/reuseable/counter';
// -------- data -------- //
import { factList } from 'data/facts';
import IconBox from 'components/reuseable/IconBox';

// ===========================================================================
type Facts2Props = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
};
// ===========================================================================

const Facts: FC<Facts2Props> = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-11">
      <div className="col-lg-12 text-center text-lg-start">
        <h2 className="fs-16 text-uppercase text-primary mb-3 text-center">Cég információk</h2>
        <h3 className="display-3 mb-4 pe-xxl-5 text-center">Eddigi eredményeink</h3>
      </div>

      <div className="col-lg-12 mt-lg-2">
        <div className="row align-items-center counter-wrapper gy-6 text-center">
          {factList.map(({ id, icon, ...item }) => (
            <Counter3
              {...item}
              key={id}
              Icon={<IconBox className="icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4" icon={icon} />}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facts;
