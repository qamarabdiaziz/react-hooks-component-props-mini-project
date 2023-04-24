
import React from "react"


function Article({ id, title, date="January 1, 1970", preview, minutes }){
    return (
        <article key={id}>
      <h2>{title}</h2>
      <small>{date}</small>
      <p>{preview}</p>
      <small>{minutes} min read</small>
    </article>
  );
};

export default Article