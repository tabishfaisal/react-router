import { Link } from "react-router";

export default function Nav(){
    return (
        <>
            <div className="pages">
               <Link to="/home">Home</Link>
                <Link to="/blog">Blogs Posts</Link>
                <Link to="/about">about</Link>
            </div>
        </>
    )
}