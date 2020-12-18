import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import TutorialDataService from "../services/TutorialService";

const TutorialsList = () => {
    const [tutorials, setTutorials] = useState([]);
    const [currentTutorial, setCurrentTutorial] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useSate("");

    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [pageSize, setPageSize] = useState(3);

    const pageSizes = [3, 6, 9];

    const onChangeSearchTitle = (e) => {
        let params = {};

        if (searchTitle) {
            params["title"] = searchTitle;
        }
        if (page) {
            params["page"] = page - 1;
        }
        if (pageSize) {
            params["size"] = pageSize;
        }
        return params;
    };

    const retrieveTutorials = () => {
        const params = getRequestParams(searchTitle, page, pageSize);

        TutorialDataService.getAll(params)
            .then((respone) => {
                const { tutorials, totalPages } = respone.data;
                setTutorials(tutorials);
                setCount(totalPages);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    useEffect(retrieveTutorials, [page, pageSize]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };
    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setPage(1);
    };

    return (
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title"
                        value={searchTitle}
                        onChange={onChangeSearchTitle}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={retrieveTutorials}
                        >
                            Search
              </button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h4>Tutorials List</h4>

                <div className="mt-3">
                    {"Items per Page: "}
                    <select onChange={handlePageSizeChange} value={pageSize}>
                        {pageSizes.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>

                    <Pagination
                        className="my-3"
                        count={count}
                        page={page}
                        siblingCount={1}
                        boundaryCount={1}
                        variant="outlined"
                        shape="rounded"
                        onChange={handlePageChange}
                    />
                </div>

                <ul className="list-group">
                    {tutorials &&
                        tutorials.map((tutorial, index) => (
                            <li
                                className={
                                    "list-group-item " + (index === currentIndex ? "active" : "")
                                }
                                onClick={() => setActiveTutorial(tutorial, index)}
                                key={index}
                            >
                                {tutorial.title}
                            </li>
                        ))}
                </ul>

            </div>


        </div>
    );
}


export default TutorialsList;