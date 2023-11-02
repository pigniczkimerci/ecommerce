import {NextPage} from 'next';
import {Fragment, useEffect, useState} from 'react';
import PageProgress from "../src/components/common/PageProgress";
import {Navbar} from "../src/components/blocks/navbar";
import {ProductCard} from "../src/components/reuseable/product-cards";
import Pagination from "../src/components/reuseable/Pagination";
import ShopService from "../src/components/common/ShopService";
import {Footer8} from "../src/components/blocks/footer";
import AccordionList from 'components/common/AccordionList';


export default function info() {
  return (
    <Fragment>
        <header className="wrapper bg-light">
            <Navbar search cart navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light"/>
        </header>

        {/* <div className="row">
            <div className="col-lg-12 col-xl-10 col-xxl-8 mx-auto text-center">
            <h2 className="display-5 text-center mt-4 mb-10">
                Információs oldal
            </h2>
            </div>
        </div>
        */}
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                <h2 className="fs-16 text-uppercase text-muted mb-12">Miért válasszon minket?</h2>
                <h3 className="display-4 mb-12">Olyan megoldásokat kínálunk, ami az ügyfeleink életét könnyebbé teszik.</h3>
                <AccordionList />
                </div>
            </div>
        </div>

    <Footer8/>
    </Fragment>
   
  )
}
