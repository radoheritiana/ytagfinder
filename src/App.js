import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import { Nav } from "./component/Nav";
import { About } from "./component/About";
import { Dna } from "react-loader-spinner";

const Result = ({ tags }) => {
  return (
    <div className="grid text-start">
      {tags.map((tag, index) => (
        <button
          key={index}
          className="btn btn-outline-secondary rounded-pill m-1 disabled"
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

function App() {
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 2000);
  }, []);

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    let baseUrl =
      "https://ytfinder.up.railway.app/ytag/api/tag_finder?url=" + url;
    setTags([]);
    setIsLoading(true);

    axios
      .get(baseUrl)
      .then((response) => {
        if (response.status === 200) {
          setErrorMessage("");
          setTags(response.data.tags);
        }
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setErrorMessage("Bad video url!");
      });
  };

  return (
    <React.Fragment>
      <div
        className="row d-flex flex-column justify-content-center"
        hidden={pageLoading}
      >
        <Dna
          visible={pageLoading}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{ marginTop: "12%" }}
          wrapperClass="dna-wrapper"
        />
      </div>
      <div className="container" hidden={pageLoading}>
        <Nav />
        <div className="jumbotron mt-3 text-center pb-5 border-bottom border-secondary border-opacity-25">
          <h1>Youtube Tag Finder</h1>
          <p className="fs-5 text-muted">Find popular youtube video tags here!</p>
          <div className="row mt-3">
            <div className="col-md-8 mx-auto">
              <div className="input-group">
                <input
                  type="text"
                  name="url"
                  id="url"
                  value={url}
                  className="form-control p-3 rounded-start"
                  placeholder="Enter youtube video url"
                  onChange={handleChange}
                />
                <button className="btn btn-primary" onClick={handleClick}>
                  Find
                </button>
              </div>
              <div
                className="spinner-grow spinner-grow-sm mt-5"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
                hidden={!isLoading}
              >
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="row mt-3" hidden={isLoading}>
                {errorMessage && (
                  <div className="alert alert-warning">{errorMessage}</div>
                )}
                {tags.length > 0 ? (
                  <Result tags={tags} />
                ) : (
                  <h3>No result yet</h3>
                )}
              </div>
            </div>
          </div>
        </div>
        <About />
      </div>
    </React.Fragment>
  );
}

export default App;
