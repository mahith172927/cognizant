import React from "react";
import "./App.css";

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

    const showBook = true;
    const showBlog = true;
    const showCourse = true;

    return(

        <div className="container">

            <div className="box">

                {
                    showCourse
                    ? <CourseDetails/>
                    : <h2>No Course Available</h2>
                }

            </div>

            <div className="box">

                {
                    showBook
                    ? <BookDetails/>
                    : <h2>No Books Available</h2>
                }

            </div>

            <div className="box">

                {
                    showBlog
                    ? <BlogDetails/>
                    : <h2>No Blogs Available</h2>
                }

            </div>

        </div>

    );

}

export default App;