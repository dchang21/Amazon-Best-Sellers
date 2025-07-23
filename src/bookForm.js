const Book = (props) =>{
    const {image, title,author, number} = props;
    return (
    <article className='book'>
        <img src= {image}
        alt= {title}
        />
        <h2>{title}</h2>
        <h4 >{author.toUpperCase()}</h4>
        <span className = 'number'>#{1 + number}</span>
        {props.children}
        
    </article>
    )
}

export default Book