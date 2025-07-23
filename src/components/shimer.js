import React from "react";
const ShimmerLoader = () => {
  return (
    <>
      <style>{`
  .body {
    display: inline-block;
    height: 420px;
    width: 300px;
    padding: 10px 10px 10px 20px;
  }

  .img {
    border: 1px solid #EEF0F5;
    background-color: #EEF0F5;
    border-radius: 20px;
    height: 210px;
    width: 295px;
  }

  .inner {
    display: inline-block;
    padding-left: 5px;
  }

  .name {
    background-color: #EEF0F5;
    height: 30px;
    width: 145px;
  }

  .title {
    display: flex;
    height: 15px;
    width: 90px;
    background-color: #EEF0F5;
  }
     .titlee {
    display: flex;
    height: 15px;
    width: 40px;
    background-color: #EEF0F5;
  }

  .offer {
    background-color: #EEF0F5;
    height: 20px;
    width: 245px;
  }
`}</style>

      <div className="body">
        <div className="img" />
        <div className="inner">
          <h1 className="name"></h1>
          <h2 className="title"></h2>
          <h1 className="titlee"></h1>
          <h3 className="offer"></h3>
          {/* <a><h3 className="title">{items}</h3></a> */}
        </div>
        <div />
      </div>
    </>
  );
};

export default ShimmerLoader;
