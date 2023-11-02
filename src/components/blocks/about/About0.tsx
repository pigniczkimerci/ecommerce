import { FC } from 'react';
import Megaphone from 'icons/lineal/Megaphone';
import { Tiles5 } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn';
// -------- data -------- //
import { aboutList1 } from 'data/about';

const About6: FC = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
      <div className="col-lg-6 position-relative order-lg-2">
        <Tiles5 />
      </div>

      <div className="col-lg-6">
        <Megaphone className="icon-svg-md mb-4" />

        <h2 className="display-4 mb-3">Kik vagyunk?</h2>

        <p className="mb-6">
        A Eshop egy nemzetközi szinten működő vállalat, amely specializálódott készülékekhez tartozó alkatrészek és tartozékok értékesítésére. Webáruházunk az adott kategória egyik legnagyobb és legjelentősebb szereplőjévé vált. Az erős növekedésünk egyik kulcsa az ügyfeleinkkel és beszállítóinkkal fenntartott kiváló kapcsolatokban rejlik. Az ügyfeleink mindig a figyelmünk középpontjában állnak, és mindent megteszünk azért, hogy hűséges ügyfelekké váljanak és maradjanak.
        </p>

        <ListColumn rowClass="gx-xl-0" list={aboutList1} />
      </div>
    </div>
  );
};

export default About6;
