import { FC } from 'react';


// ================================================================

const SearchBar: FC = () => {
  

  return (
    <div className="card-body mx-10 search">
        <div className="row">
            <div className="col-md-4">
                <div className="box m-3 pricing card p-5">
                    <h1 className='text-primary text-center'>Termékek</h1>
                    <p className='line_text px-2'>Írja be a termékek nevét amelyhez alkatrészt keres vagy kattintson a tovább gombra!</p>
                    <form className="form-inline  search_bar ">
                        <div className="input-group md-form form-sm form-2 pl-0">
                        <input className="form-control my-0 py-1 " type="text" placeholder="Termék megnevezése" aria-label="Termék megnevezése" />
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">
                                    <i className="uil uil-search"></i>
                                </span>
                            </div>
                        </div>
                    </form>
                    <button id="sbtn" className='btn btn-primary mt-3'>Tovább</button>
                </div>
            </div>
            <div className="col-md-4">
                <div className="box m-3 pricing card p-5">
                    <h1 className='text-primary text-center'>Márkák</h1>
                    <p className='line_text px-2'>Írja be a márka nevét amelyhez alkatrészt keres vagy kattintson a tovább gombra!</p>
                    <form className="form-inline  search_bar ">
                    <div className="input-group md-form form-sm form-2 pl-0">
                        <input className="form-control my-0 py-1 " type="text" placeholder="Márka megnevezése" aria-label="Márka megnevezése" />
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="uil uil-search"></i>
                            </span>
                        </div>
                    </div>
                    </form>
                    <button id="sbtn" className='btn btn-primary mt-3'>Tovább</button>
                </div>
            </div>
            <div className="col-md-4">
                <div className="box m-3 pricing card p-5">
                    <h1 className='text-primary text-center'>Termékkategóriák</h1>
                    <p className='line_text px-2'>Írja be a termékkategória nevét amelyhez alkatrészt keres vagy kattintson a tovább gombra!</p>
                    <form className="form-inline  search_bar ">
                    <div className="input-group md-form form-sm form-2 pl-0">
                        <input className="form-control my-0 py-1 " type="text" placeholder="Termékkategória megnevezése" aria-label="Termékkategória megnevezése" />
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="uil uil-search"></i>
                            </span>
                        </div>
                    </div>
                    </form>
                    <button id="sbtn" className='btn btn-primary mt-3'>Tovább</button>
                </div>
            </div>
        </div>
    </div>

  );
};

export default SearchBar;
