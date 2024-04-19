/* eslint-disable react/prop-types */
import './Article.css'

const Article = ({title, content}) => {
    return (
        <article className='article'>
            <h1>{title}</h1>
            <p>{content}</p>
        </article>
    );
}

export default Article;