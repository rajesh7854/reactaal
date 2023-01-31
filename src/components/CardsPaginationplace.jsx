import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import HeartRed from "./images/red-heart-11530996807g7ynit0qao-removebg-preview.png";
import LocationImg from "./images/location.png";
import HeartBlack from "./images/blue-heart-11530996807g7ynit0qao-removebg-preview.png";
import SpotlightSection from "../SpotlightSection";

const CardsPaginationplace = () => {
  const [postsPerPage] = useState(5);
  const [offset, setOffset] = useState(1);
  const [displayAllPost, setDisplayAllPost] = useState([]);
  // const [A] = useState('')
  const [APIData, setAPIData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [searchData, setSearchData] = useState("");
  const [HeartImages, setImage] = useState(false);
  const [ApiDataCountries, SetApiDataCountries] = useState([]);
  // const [loading, setLoading] = useState("loading...");

  useEffect(() => {
    getAllPosts();
  }, [offset]);

  const getAllPosts = async () => {
    const res = await axios.get(
      `https://univisionz.in/aal/public/api/mydata/16`
    );
    console.log("res");
    console.log(res);
    const response = res.data.data;
    setAPIData(response);
  };

  useEffect(() => {
    console.log("shwo all data==>", APIData);
    if (APIData) {
      const filterData = !searchData
        ? APIData
        : APIData.filter((CurrentElement) =>
            CurrentElement.name.toLowerCase().includes(searchData.toLowerCase())
          );
      const perPageData = filterData.slice(
        offset - 1,
        offset - 1 + postsPerPage
      );
      const getData = getPostData(perPageData);

      setDisplayAllPost(getData);
      setPageCount(Math.ceil(filterData.length / postsPerPage));
    }
  }, [APIData, searchData]);

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setOffset(selectedPage + 1);
  };

  const getPostData = (data) => {
    return data.map((post) => (
      <>
      <div className="row" key={post.id}>
        <div
          className="card my-4 p-3 rounded-3 shadow"
          style={{ backgroundColor: "#f1f3f4" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={post.image}
                className="img-fluid rounded-start  w-75   "
                alt="..."
              />
              <a
                href="/"
                className="btn shadow rounded-pill mt-5 secondary_btn"
              >
                Read More
              </a>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <h5> Top showcase Communities</h5>
                    <hr></hr>
                  </div>
                  <div className="col justify-content-end d-flex">
                    <img
                      src={HeartImages ? HeartBlack : HeartRed}
                      alt="Heartimg"
                      onClick={() => setImage((HeartRed) => !HeartRed)}
                      style={{ width: "30px", height: "30px" }}
                      className=" rounded-circle border-dark  "
                    ></img>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col">
                    <h5 className="card-title section_headings position-relative">
                      {post.name}
                      <sup>®</sup>
                    </h5>
                    <span className="badge rounded-pill bg-secondary shadow ">
                      {/* <img src={LocationImg} className="img-fluid h-100" style={{ width: "20px" }} alt="locationDecorativeimage"></img>  */}
                      {post.price}
                    </span>{" "}
                  </div>
                  <div className="col d-flex  justify-content-end  rounded-circle border-dark ">
                    <div className="row flex-column">
                      <div className="col">
                        <ul
                          className="itenary"
                          style={{ listStyleType: "none" }}
                        >
                          <li className="fw-lighter">
                            <i className="fa-solid fa-house  me-3 section_headings "></i>{" "}
                            {post.street_address}
                          </li>
                          <li>
                            <i className="fa-solid fa-phone me-3 section_headings"></i>{" "}
                            {post.phone}
                          </li>
                          <li>
                            <i className="fa-solid fa-dollar me-3 section_headings"></i>{" "}
                            {post.price}
                          </li>
                          <li>
                            <i className="fa-sharp fa-solid fa-flag me-3 section_headings"></i>{" "}
                            {post.street_address}{" "}
                          </li>
                        </ul>{" "}
                      </div>
                      <div className="col flex-column text-end aling-items-end justify-content-end  border-dark  ">
                        {/* <p className="card-text text-end"><small className="text-muted"> {post.id}</small></p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </>
    ));
  };

  return (
    <>
      {/* <input
        type='search'
        placeholder='Searching...'
        onChange={(e) => setSearchData(e.target.value)}  /> */}
      <div className="main-app">
        {/* Display all the posts */}
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
        {displayAllPost}

        {/* Using React Paginate */}
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};

export default CardsPaginationplace;
