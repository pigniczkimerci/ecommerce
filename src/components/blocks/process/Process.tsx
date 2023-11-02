import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';
import { ProcessList } from 'components/reuseable/process-list';
// -------- data -------- //
import { processList } from 'data/process';

const Process: FC = () => {
  return (
    <div className="row gx-md-8 gx-xl-12 gy-10 mb-14 mb-md-18 align-items-center">
      <div className="col-lg-6 order-lg-2">
        {processList.map((item) => {
          return <ProcessList shadow {...item} key={item.no} />;
        })}
      </div>

      <div className="col-lg-6">
        <h2 className="fs-16 text-uppercase text-muted mb-3">Rendelés menete</h2>
        <h3 className="display-4 mb-5"> A rendelés most könnyebb és gyorsabb, mint valaha.</h3>

        <p>
        Természetesen, csak néhány egyszerű kattintás választja el Önt attól, hogy kényelmesen és 
        gyorsan hozzájusson az otthonában legnagyobb vágyát kielégítő, kiváló minőségű termékekhez. 
        </p>

        <p className="mb-6">
        Fedezze fel rendkívül egyszerű és zökkenőmentes online rendelési folyamatunkat, amely segít 
        megtapasztalni az online vásárlás által kínált kényelmet és előnyöket, mindezt kényelmesen és stresszmentesen!
        </p>

        <NextLink href="#" title="Tudj meg többet" className="btn btn-primary rounded-pill mb-0" />
      </div>
    </div>
  );
};

export default Process;
