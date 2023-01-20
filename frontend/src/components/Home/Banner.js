// import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  // const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    // setSearchTerm(e.target.value);

    props.onTitleFilter(
      e.target.value,
      (page) => agent.Items.byTitle(e.target.value),
      agent.Items.byTitle(e.target.value)
    );

    // if (searchTerm.length >= 3) {
    //   fetch(`/api/items?title=${searchTerm}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((error) => console.log(error));
    // }
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <form>
            <input
              style={{ width: "300px" }}
              type="text"
              onChange={handleChange}
              id="search-box"
              placeholder="What is it that you truly desire?"
            />
          </form>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
