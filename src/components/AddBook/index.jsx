import React, { useEffect, useState } from 'react';
import productAPI from '../../api/productAPI';
import { useHistory } from "react-router-dom";

AddBook.propTypes = {

};

function AddBook(props) {

    let history = useHistory();

    const innitalBook = {
        id: null,
        title: "",
        desc: "",
        img: ""
    };
    const [tutorial, setTutorial] = useState(innitalBook);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setTutorial({ ...tutorial, [name]: value });

    };

    const saveTutorial = () => {
        var data = {
            title: tutorial.title,
            desc: tutorial.desc,
            img: tutorial.img
        };
        productAPI.addBook(data)
            .then(respone => {
                setTutorial({
                    id: respone.id,
                    title: respone.title,
                    desc: respone.desc,
                    img: respone.img

                });
                history.push("/admin");

            })
            .catch(err => alert(err));
    };




    const getBookById = id => {
        console.log(id);
        productAPI.get(id)
            .then(response => {
                setTutorial(response);
            })
            .catch(e => {
                console.log(e);
            });

    };


    useEffect(() => {
        if (props.hasOwnProperty('match'))
            getBookById(props.match.params.id);
    }, []);


    const updateTutorial = () => {
        productAPI.updateBook(tutorial.id, tutorial)
            .then(response => {
                console.log(response);
                history.push("/admin");
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (

        <div>

            <div>
                <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    <a className="navbar-brand" href="index.html">Wellcome</a>
                    <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i className="fas fa-bars"></i></button>
                    {/* <!-- Navbar--> */}
                    <ul className="navbar-nav ml-auto ml-md-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <a className="dropdown-item" href="#">Settings</a>
                                <a className="dropdown-item" href="#">Activity Log</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="login.html">Logout</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div className="sb-sidenav-menu">
                                <div className="nav">

                                    <a className="nav-link" href="index.html">
                                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>

                                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                        <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Layouts

                                </a>
                                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="layout-static.html">Static Navigation</a>
                                            <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                        </nav>
                                    </div>
                                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                        <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Pages

                                </a>
                                    <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                        <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                                Authentication
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                            </a>
                                            <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                                <nav className="sb-sidenav-menu-nested nav">
                                                    <a className="nav-link" href="login.html">Login</a>
                                                    <a className="nav-link" href="register.html">Register</a>
                                                    <a className="nav-link" href="password.html">Forgot Password</a>
                                                </nav>
                                            </div>
                                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                                Error
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                            </a>
                                            <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                                <nav className="sb-sidenav-menu-nested nav">
                                                    <a className="nav-link" href="401.html">401 Page</a>
                                                    <a className="nav-link" href="404.html">404 Page</a>
                                                    <a className="nav-link" href="500.html">500 Page</a>
                                                </nav>
                                            </div>
                                        </nav>
                                    </div>

                                    <a className="nav-link" href="charts.html">
                                        <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Charts
                            </a>
                                    <a className="nav-link" href="tables.html">
                                        <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Tables
                            </a>
                                </div>
                            </div>
                            <div className="sb-sidenav-footer">
                                <div className="small">NTA98</div>
                        NGUYEN TUAN ANH
                    </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid">
                                <h1 className="mt-4">Dashboard</h1>
                                <ol className="breadcrumb mb-4">
                                    <li className="breadcrumb-item active">Thêm mới sản phẩm</li>
                                </ol>
                                <div className="row">
                                    <div className="col-xl-3 col-md-6">
                                        <div className="card bg-primary text-white mb-4">
                                            <div className="card-body">Primary Card</div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <a className="small text-white stretched-link" href="#">View Details</a>
                                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="card bg-warning text-white mb-4">
                                            <div className="card-body">Warning Card</div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <a className="small text-white stretched-link" href="#">View Details</a>
                                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="card bg-success text-white mb-4">
                                            <div className="card-body">Success Card</div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <a className="small text-white stretched-link" href="#">View Details</a>
                                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="card bg-danger text-white mb-4">
                                            <div className="card-body">Danger Card</div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <a className="small text-white stretched-link" href="#">View Details</a>
                                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-table mr-1"></i>
                                Nhập thông tin sản phẩm
                                </div>
                                    <label for="usr" style={{ marginLeft: "-550px", marginTop: "10px", fontWeight: "bold" }}>Title:</label>
                                    <input required style={{ width: "50%", marginLeft: "300px", marginBottom: "10px", }} type="text" class="form-control" id="title" name="title" onChange={handleInputChange} value={tutorial.title} />
                                    <label for="usr" style={{ marginLeft: "-550px", marginTop: "10px", fontWeight: "bold" }}>Desc:</label>
                                    <input required style={{ width: "50%", marginLeft: "300px", marginBottom: "10px" }} type="text" class="form-control" id="desc" name="desc" onChange={handleInputChange} value={tutorial.desc} />
                                    <label for="usr" style={{ marginLeft: "-540px", marginTop: "10px", fontWeight: "bold" }}>Image:</label>
                                    <input required style={{ width: "50%", marginLeft: "300px", marginBottom: "50px" }} type="text" class="form-control" id="img" name="img" onChange={handleInputChange} value={tutorial.img} />

                                    {tutorial.id ? <button onClick={updateTutorial} type="button" style={{ width: "10%", margin: "0 auto", marginBottom: "20px" }} class="btn btn-info">Update</button> :
                                        <button onClick={saveTutorial} type="button" style={{ width: "10%", margin: "0 auto", marginBottom: "20px" }} class="btn btn-info">Save</button>}
                                </div>

                            </div>
                        </main>
                        <footer className="py-4 bg-light mt-auto">
                            <div className="container-fluid">
                                <div className="d-flex align-items-center justify-content-between small">
                                    <div className="text-muted">TuanAnh &copy;  Website 2020</div>

                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBook;