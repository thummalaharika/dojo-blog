import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home =() => {
    // const [name, setName] = useState('mario');

    // const handleClick = () => {
    //    setName('luigi');
    // }
    // const handleClickAgain = (name) => {
    //     console.log('hello ' + name);
    // }
    
    // const handleclick = (id) => {
    //     const newblogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newblogs)
    // }

    
    const {data: blogs, isPending , error} = useFetch('http://localhost:8000/blogs')
    

    return(
        <div className="home">
            {error && <div>{error}</div> }
            {isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs}  /> } 


            {/* <h2>Homepage</h2> */}
            {/* <p>{ name }</p>
            <button onClick={handleClick}>click me</button>
             */}
            
        </div>
    )
}

export default Home;