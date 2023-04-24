import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
// import Article from "./Article";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {

  const posts = [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
  ];
  return (
    <div className="App">
      <Header blogname = "underreacted"/>
      <About
      imageSrc="https://example.com/my-blog-logo.png"
      altText="My Blog Logo"
      aboutText="A blog about learning React"

      />

      <ArticleList/>


    </div>
  );
}

export default App;
