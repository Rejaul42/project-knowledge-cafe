import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handelBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <div>
            <div className="md: w-2/3">
                <h2 className="text-3xl font-medium">Blogs:{blogs.length}</h2>
            </div>
            <div className="mr-8">
                {
                    blogs.map(blog => <Blog 
                        key={blog.id} 
                        blog={blog}
                        handelBookmark={handelBookmark}
                        handleMarkAsRead={handleMarkAsRead}
                        ></Blog>)
                }
            </div>
        </div>
    );
}
Blogs.propTypes ={
    handelBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blogs    