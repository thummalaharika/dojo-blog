
import {Link} from 'react-router-dom';

const BlogList = (props) => {
    const blogs = props.blogs;
    
    return ( 
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.name}</h2>
                    <h2>{blog.department}</h2>
                    <h2>{blog.Hall}</h2>
                    <p> {blog.Rollno}</p>
                    <Link to={`/blogs/${blog.id}`}>readmore</Link>
                    
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;