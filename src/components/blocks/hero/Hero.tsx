import { FC } from 'react';
import { slideInDownAnimate } from 'utils/animation';
import Typewriter from 'typewriter-effect';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';
import Carousel from 'components/reuseable/Carousel';
import NextLink from 'components/reuseable/links/NextLink';

const Hero3: FC = () => {
  // used for lightbox
  useLightBox();

  return (
    <div className="wrapper bg-dark">
      <Carousel
        slidesPerView={1}
        className="swiper-hero dots-over"
        autoplay={{ delay: 7000, disableOnInteraction: false }}
      >
        <div
          className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
          style={{ backgroundImage: 'url("/img/photos/dmitriy-demidov-iuuJC_pjLU0-unsplash.jpg")' }}
        >
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-md-12 col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center justify-content-center align-self-center">
                <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                    Minőségi alkatrészek egy kattintással.
                </h2>

                <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                    Több ezer különböző alkatrész közül válogathatsz, és mindössze egy kattintással rendelheted meg, hogy minőségi termékekkel szereld fel eszközeidet.
                </p>

                <div className="animate__animated animate__slideInUp animate__delay-3s">
                  <NextLink title="Read More" href="#" className="btn btn-lg btn-outline-white rounded-pill" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
          style={{ backgroundImage: 'url("/img/photos/pexels-dan-cristian-pădureț-9966684.jpg")' }}
        >
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center justify-content-center align-self-center">
                <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                    Minden alkatrész, amire szükséged van.
                </h2>

                <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                Az összes szükséges alkatrész megtalálható nálunk. Legyen szó elektronikai alkatrészekről, autóalkatrészekről vagy egyéb eszközökről, mi itt vagyunk, hogy segítsünk.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
          style={{ backgroundImage: 'url("/img/photos/robin-glauser-aSvBypuXGkc-unsplash.jpg")' }}
        >
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start">
                <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                    Megbízható alkatrészek gyors szállítással.
                </h2>

                <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                Rendszerünk gyors és megbízható szállítást biztosít, hogy ne kelljen sokáig várnod az új alkatrészeidre.
                </p>

                <div className="animate__animated animate__slideInUp animate__delay-3s">
                  <NextLink title="Contact Us" href="#" className="btn btn-lg btn-outline-white rounded-pill" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero3;
