import React from "react";

const NewsItem = (props ) => {
  let { title, description, imageUrl, newsUrl, source, author, date } = props;
  return (
    <div className="my-3">
      <div className="card">
        <span
          className="badge rounded-pill bg-danger"
          style={{
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          {" "}
          {source}
        </span>
        <img
          src={
            !imageUrl
              ? "https://www.sammobile.com/wp-content/uploads/2023/01/Apple-Watch-Ultra-720x405.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-danger">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
