import { Fragment, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import axios from "axios";
import {ProductCard1} from "../src/components/reuseable/product-cards";
import CountUp from 'react-countup';
import Typewriter from 'typewriter-effect';
import { fadeInAnimate, slideInDownAnimate } from 'utils/animation';
import { Navbar } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';
import AccordionList1 from 'components/common/AccordionList1';
import NextLink from 'components/reuseable/links/NextLink';
import { Hero, Hero15, Hero21 } from 'components/blocks/hero';
import { clientList } from 'data/client';
import { About1, About3 } from 'components/blocks/about';
import { CTA4 } from 'components/blocks/call-to-action';
import { Facts, Facts1, Facts10, Facts11, Facts12, Facts13, Facts14, Facts15, Facts16, Facts17, Facts2, Facts3, Facts4, Facts5, Facts6, Facts7, Facts8, Facts9 } from 'components/blocks/facts';
import { Pricing3 } from 'components/blocks/pricing';
import { Process } from 'components/blocks/process';
import { Services4 } from 'components/blocks/services';
import { Testimonial } from 'components/blocks/testimonial';
import Blog1 from './blog-1';
import Contact1 from './contact-1';
import { SearchBar } from 'components/blocks/searchbar';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import { breadcrumb } from 'data/cart-page';
import ContactForm from 'components/common/ContactForm';
import { Footer1, Footer10, Footer11, Footer12, Footer13, Footer14, Footer15, Footer16, Footer17, Footer18, Footer2, Footer3, Footer4, Footer5, Footer6, Footer7, Footer8, Footer9 } from 'components/blocks/footer';
const Home: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-dark">
        <Navbar
          search
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-dark"
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
       {/* 
          <Hero15 />
          <SearchBar />
      */}
        <section className="wrapper bg-light">
          <div className="container-fullwidth">
            <Hero />
            <section style={{ position: "relative", marginTop: "-150px", zIndex: "1"}}>
              <SearchBar />
            </section>
            
          </div>
        </section>

        <div className="wrapper bg-light bg-soft-primary">
          <div className="container py-10 my-10">
            <Facts />
          </div>
        </div>

        <div className="wrapper bg-light">
          <div className="container my-15">
          <Process />
          </div>
        </div>

        <div className="wrapper">
          <div className="container-fullwidth mt-15">
          <Testimonial />
          </div>
        </div> 

        <div className="wrapper">
          <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 my-10">
            <h2 className="display-4 mb-3 text-center">Írjon nekünk</h2>
            <p className="lead text-center mb-10">
            Vegye fel velünk a kapcsolatot űrlapunkon keresztül, és hamarosan válaszolunk Önnek.
            </p>
            <ContactForm />
          </div>
        </div>
      </main>

      <footer>
        <Footer5 />
      </footer>
      
      {/* ========== footer section ========== 
      <section className="wrapper bg-gradient-reverse-primary">
        <div className="container pt-xl-10 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto">
              <img src="/img/demos/icon.png" srcSet="/img/demos/icon@2x.png 2x" alt="" />
              <h2 className="display-3 mt-3 mb-3 px-lg-8">
                Think unique and be creative. Make a difference with Sandbox.
              </h2>
              <p className="lead fs-lg mb-6">
                Everything you need to create your next unique and professional website, including impressive and
                ready-made blocks and pages.
              </p>
              <a
                href="https://1.envato.market/Ea4VxK"
                target="_blank"
                className="btn btn-lg btn-primary rounded-pill mb-10"
                rel="noreferrer"
              >
                Buy Sandbox
              </a>
            </div>
          </div>

          <img className="img-fluid" src="/img/demos/f1.png" srcSet="/img/demos/f1@2x.png 2x" alt="" />
        </div>
      </section>
      */}
    </Fragment>
  );
};

export default Home;
