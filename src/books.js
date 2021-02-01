import React from 'react';


const BookContainer = (props) => {
    const {img, title, author } = props;
    const handleClick = () => {
        alert(title);
    }
    return (
        <article className="book">
            <img src={img} alt="book" srcSet="" />
            <h1 onClick={handleClick}>{title}</h1>
            <p style={{ fontWeight: "bold", fontSize: "0.75rem", color: "#617d98" }}>{author}</p>
        </article>
    );
}

export default BookContainer;