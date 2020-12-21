import React from 'react';
import { useEffect, useState } from 'react';
import Pagination from "@material-ui/lab/Pagination";
import productAPI from '../../api/productAPI';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

Admin.propTypes = {

};

function Admin(props) {
    let history = useHistory();

    const innitalBook = {
        id: null,
        title: "",
        desc: "",
        img: ""
    };
    const [tutorial, setTutorial] = useState(innitalBook);

    const imgStyle = {
        width: '70px',
        height: '70px',
    };

    const styleAdd = {
        marginLeft: '11px',
        marginBottom: '10px'
    };

    const [bookList, setBookList] = useState([]);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [searchTitle, setSearchTitle] = useState("");

    const pageSizes = [5, 15, 25];

    const onChangeSearchTitle = (e) => {
        setSearchTitle(e.target.value);
        console.log(searchTitle);
    };

    const getRequestParams = (searchTitle, page, pageSize) => {
        let params = {};


        if (searchTitle) {
            params["search"] = searchTitle;
        }
        if (page) {
            params["page"] = page;
        }

        if (pageSize) {
            params["limit"] = pageSize;
        }
        return params;
    };
    const fetchBookList = async () => {
        try {
            const params = getRequestParams(searchTitle, page, pageSize);
            await productAPI.getAll(params)
                .then((response) => {
                    const bk = response;
                    let tt = localStorage.getItem("tt");
                    setCount(Math.ceil(tt / pageSize));
                    setBookList(bk);
                })
        } catch (error) {
            console.log('Failed to fetch product list:', error)
        }
    }

    useEffect(

        fetchBookList
        , [searchTitle, page, pageSize]);



    useEffect(() => {
        const fetchBookList2 = async () => {
            try {
                const params = getRequestParams();
                console.log(params);
                await productAPI.getAll(params)
                    .then((response) => {
                        const tt = response.length;

                        localStorage.setItem("tt", tt);
                    })

            } catch (error) {
                console.log('Failed to fetch product list:', error)
            }
        }
        fetchBookList2();
    }, []);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setPage(1);

    };

    const deleteBookByIds = () => {
        bookList.forEach(d => {
            if (d.select) {
                productAPI.deleteBook(d.id)
                    .then(response => {
                        console.log(response);
                        fetchBookList();
                    })
                    .catch(e => {
                        console.log(e);
                    })
            }
        });

    }




    return (
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
                                <li className="breadcrumb-item active">Dashboard</li>
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
                                <Link to="/addBook"><button type="button" className="btn btn-success" style={styleAdd}>ADD</button></Link>
                            </div>


                            <div className="card mb-4">
                                <div className="card-header">
                                    <i className="fas fa-table mr-1"></i>
                                Books List




                                </div>
                                <div className="card-body">

                                    <div className="table-responsive">
                                        <div className="mt-3">
                                            {"Số bản ghi/trang: "}
                                            <select className="mb-4" onChange={handlePageSizeChange} value={pageSize}>
                                                {pageSizes.map((size) => (
                                                    <option key={size} value={size}>
                                                        {size}
                                                    </option>
                                                ))}
                                            </select>
                                            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                                                <div className="input-group">
                                                    <input style={{ marginLeft: "650px" }} value={searchTitle}
                                                        onChange={onChangeSearchTitle} className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-primary" type="button"><i className="fas fa-search"></i></button>
                                                    </div>
                                                </div>
                                            </form>
                                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                                <thead>
                                                    <tr>
                                                        <th width="10%">ID</th>
                                                        <th>  <input type="checkbox" onChange={e => {
                                                            let value = e.target.checked; setBookList(bookList.map(d => {
                                                                d.select = value;
                                                                return d;
                                                            })
                                                            );
                                                        }} /></th>
                                                        <th>TITLE</th>
                                                        <th>DESC</th>
                                                        <th>IMG</th>
                                                        <th width="25%">ACTION</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {bookList.map(ad => (
                                                        <tr key={ad.id}>
                                                            <td>{ad.id}</td>
                                                            <td>   <input
                                                                type="checkbox"
                                                                checked={ad.select}
                                                                onChange={e => {
                                                                    let value = e.target.checked;
                                                                    setBookList(
                                                                        bookList.map(sd => {
                                                                            if (sd.id === ad.id) {
                                                                                sd.select = value;
                                                                            }
                                                                            return sd;
                                                                        })
                                                                    );
                                                                }}
                                                            /></td>
                                                            <td>{ad.title}</td>
                                                            <td>{ad.desc}</td>
                                                            <td><img src={ad.img} style={imgStyle} /></td>
                                                            <td><Link to={"/books/" + ad.id}><button type="button" className="btn btn-primary">Update</button></Link>&nbsp; &nbsp;

                                                            </td>

                                                        </tr>
                                                    ))}

                                                </tbody>

                                            </table>
                                            <button onClick={() => { deleteBookByIds() }} type="button" className="btn btn-danger" >Delete</button>
                                            <Pagination
                                                count={count}
                                                page={page}
                                                siblingCount={0}
                                                boundaryCount={2}
                                                onChange={handlePageChange}
                                                variant="outlined" color="secondary"
                                            />
                                        </div>

                                    </div>

                                </div>
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
    );
}

export default Admin;