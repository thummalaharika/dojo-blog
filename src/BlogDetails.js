import {useParams} from "react-router-dom";
import useFetch from './useFetch';
import {useHistory} from 'react-router-dom';

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' +id);
    const history = useHistory();
    
const handleClick = () =>{
    fetch('http://localhost:8000/blogs/' + blog.id,{
        method: 'DELETE'
    }).then(()=>{
        history.push('/');
    })
}

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div> }
            {error && <div>{error}</div> }
            {blog && (
                <article>
                    <h2>{blog.name}</h2>
                    <p>{blog.department}</p>
                    <p>{blog.Hall}</p>
                    <button onClick={handleClick}>delete</button>

                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;