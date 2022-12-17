
import {  useState } from "react";
import {useHistory} from 'react-router-dom';
const Create = () => {
    const[name, setName] = useState('');
    const[department, setDepartment] = useState('');
    const[Hall, setHall] = useState('');
    const[isPending, setIsPending] = useState(false);
    const history = useHistory(); 
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {name, department, Hall};
        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers : {"content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setIsPending(false);
        })

        // history.go(-1);
        history.push('/');
    }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form  onSubmit={handleSubmit}>
                <label >Blog name :</label>
                <input
                 type="text"
                 required value={name}
                 onChange={(e) => setName(e.target.value)}/>
                <label >Blog department</label>
                <input type="text" required value = {department} onChange={(e) => setDepartment(e.target.value)}/>
                <label >blog Hall</label>
                <input type="text" required value = {Hall} onChange={(e) => setHall(e.target.value)} />
                { !isPending && <button>Add Blog</button>}
                { isPending && <button>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;