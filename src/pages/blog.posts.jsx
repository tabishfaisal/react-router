import style from '../pages/blog.posts.module.css';

export default function Blog(){
    const posts = [
        { id: 1, title: 'Il primo post', content: 'Contenuto del primo post.' },
        { id: 2, title: 'Un altro post', content: 'Contenuto di un altro post.' },
        { id: 3, title: 'Post interessante', content: 'Questo è davvero interessante!' },
      ];

    return (
        <>
        <div className={style.container}>
            <div className={style.row}>
                {posts.map((post)=>(
                <div key={post.id} className={style.col}>
                    <div className={style.card}>
                        <h1>{post.title}</h1>
                        <p>{post.content}</p>
                    </div>
        
                    
                </div>
            ))}
            </div>
        </div>
            
        </>
    )
}