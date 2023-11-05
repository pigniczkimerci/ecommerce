import { Fragment, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { Navbar } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import { Hero } from 'components/blocks/hero';
import { Facts } from 'components/blocks/facts';
import { Process } from 'components/blocks/process';
import { Testimonial } from 'components/blocks/testimonial';
import ContactForm from 'components/common/ContactForm';
import { Footer5 } from 'components/blocks/footer';
const Home: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper">
        <Navbar
          search
          logoAlt="logo-dark"
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-light"
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
            
          </div>
        </section>

        <div className="wrapper bg-light bg-soft-primary">
          <div className="container py-10 ">
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
