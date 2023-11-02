import Link from 'next/link';
import LinkType from 'types/link';
import { FC, Fragment, ReactElement, useRef } from 'react';
// -------- custom hook -------- //
import useSticky from 'hooks/useSticky';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import ListItemLink from 'components/reuseable/links/ListItemLink';
import DropdownToggleLink from 'components/reuseable/links/DropdownToggleLink';
// -------- partial header component -------- //
import Info from './partials/Info';
import Search from './partials/Search';
import Social from './partials/Social';
import Signin from './partials/Signin';
import Signup from './partials/Signup';
import Language from './partials/Language';
import MiniCart from './partials/MiniCart';
// -------- data -------- //
import {
  page
} from 'data/navigation';

// ===================================================================
type NavbarProps = {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
};
// ===================================================================

const Navbar: FC<NavbarProps> = (props) => {
  const { navClassName, info, search, social, language, button, cart, fancy, navOtherClass, stickyBox, logoAlt } =
    props;

  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically render the logo
  const logo = sticky ? 'logo-dark' : logoAlt ?? 'logo-dark';
  // dynamically added navbar classname
  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  // render inner nav item links
  const renderLinks = (links: LinkType[]) => {
    return links.map((item) => (
      <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />
    ));
  };

  // all main header contents
  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-20">
        <NextLink href="/" title={<img alt="logo" src={`/img/${logo}.png`} srcSet={`/img/${logo}@2x.png 2x`} />} />
      </div>


        {/* ============= center side header content ============= */}
        <div className={navOtherClass + "navbar w-60 px-5"}>
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* ============= language dropdwown ============= */}
          {language && <Language />}

          {/* ============= info button ============= */}
          {info && (
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info">
                <i className="uil uil-info-circle" />
              </a>
            </li>
          )}

          {/* ============= search icon button ============= */}
          <form className="form-inline .search_bar  w-100">
            <div className="input-group md-form form-sm form-2 pl-0">
              <input className="form-control my-0 py-1 " type="text" placeholder="Search" aria-label="Search" style={{ borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px' }}/>
              <div className="input-group-prepend bg-primary" style={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }}>
                {search && (
                  <li className="nav-item">
                    <a className="nav-link" /*data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search"*/ >
                      <i className="uil uil-search p-1" id="nav"/>
                    </a>
                  </li>
                )}
                </div>
            </div>
          </form>
         

          {/* ============= contact button ============= 
          {button && <li className="nav-item d-none d-md-block">{button}</li>}*/}

          {/* ============= shopping cart button ============= */}
          {cart && (
            <li className="nav-item">
              <Link
                /*Show left side*/
                /*  data-bs-toggle="offcanvas" 
                  data-bs-target="#offcanvas-cart"*/
                className="nav-link position-relative d-flex flex-row align-items-center"
                href="/cart"
              >
                <div>
                  <i className="uil uil-shopping-cart" />
                  <span className="badge badge-cart bg-primary">3</span>
                </div>
              </Link>
            </li>
          )}


          {/* ============= social icons link ============= 
          {social && <Social />}*/}

          {/* ============= humburger button for small device ============= */}
          <li className="nav-item d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav" className="hamburger offcanvas-nav-btn">
              <span />
            </button>
          </li>
        </ul>
      </div>
      
      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start w-20">
        {/*
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white fs-30 mb-0">Sandbox</h3>
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white" />
        </div>
        */}
        
        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav"> 
          {/*<ul className="nav-item dropdown caret-none"> */}
            {page.map(({ id, url, title, children }) => {
                if (!url && children) {
                  return (
                    <li className="nav-item dropdown" key={id}>
                      <DropdownToggleLink title={title} className="nav-link dropdown-toggle"/>
                      <ul className="dropdown-menu ">{renderLinks(children)}</ul>
                    </li>
                      );
                    }else 
                    return (
                      <ul className="navbar-nav" key={id}>
                        <ListItemLink href={url} title={title} />
                      </ul>
                    );
                  })}
                  
            </ul>

          {/* ============= show contact info in the small device sidebar ============= */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink title="info@email.com" className="link-inverse" href="mailto:first.last@email.com" />
              <br />
              <NextLink href="tel:0123456789" title="00 (123) 456 78 90" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      
    </Fragment>
  );

  return (
    <Fragment>
      {stickyBox && <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
        )}
      </nav>

      {/* ============= signin modal ============= */}
      <Signin />

      {/* ============= signup modal ============= */}
      <Signup />

      {/* ============= info sidebar ============= */}
      {info && <Info />}

      {/* ============= show search box ============= */}
      {search && <Search />}

      {/* ============= cart sidebar ============= */}
      {cart && <MiniCart />}
    </Fragment>
  );
};

// set deafult Props
Navbar.defaultProps = {
  cart: false,
  info: false,
  social: false,
  search: false,
  language: false,
  stickyBox: true,
  navOtherClass: 'navbar-other w-100 d-flex',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};

export default Navbar;
