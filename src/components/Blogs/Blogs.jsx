import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/blog";
import PropTypes from 'prop-types'


const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    },[])

    return (
        <div className=" w-2/3">
            <h2 className=" text-2xl font-semibold">Blogs:{blogs.length}</h2>
            {
                blogs.map(blog => <Blog 
                    handleAddToBookmark={handleAddToBookmark} 
                    handleMarkAsRead={handleMarkAsRead}
                    key={blog.id} 
                    blog={blog}
                
                ></Blog>)
            }
            
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blogs;