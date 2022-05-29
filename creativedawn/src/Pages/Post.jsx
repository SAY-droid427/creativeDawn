import { useParams, useLocation } from 'react-router-dom';

const Post = () => {
    const {id} = useParams()
    const query = new URLSearchParams(useLocation().search);
    console.log(query);
    return (
        <div>
            <h1>Id is ={id}</h1>
            <h2>{query.get("name")}</h2>    
            <h2>{query.get("type")}</h2>        
        </div>
        
    )
}

export default Post;
