import React from 'react';
import PropTypes from 'prop-types';

Products.propTypes = {

};

function Products(props) {
    const { listProduct } = props;


    return (

        <div>
            <section className="projects-section bg-light" id="projects">
                <div className="container">
                    {listProduct.map(ld => (
                        <div className="row justify-content-center no-gutters" key={ld.id}>
                            <div className="col-lg-6"><img className="img-fluid" src={ld.img} alt="" /></div>
                            <div className="col-lg-6 order-lg-first">
                                <div className="bg-black text-center h-100 project">
                                    <div className="d-flex h-100">
                                        <div className="project-text w-100 my-auto text-center text-lg-right">
                                            <h4 className="text-white">{ld.title}</h4>
                                            <p className="mb-0 text-white-50">{ld.desc}</p>
                                            <hr className="d-none d-lg-block mb-0 mr-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Products;