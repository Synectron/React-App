

const CommentDetails = (props)=>{
    console.log("props",props)
return (
    <div className="comment">
    <a href="/" className="avatar">
        <img alt="image" src={props.source} />
    </a>
    <div className="content">
        <a href="/" className="author">
            {props.author}
        </a>
        <div className="metadata">
<span className="date">{props.when}</span>
</div>
    </div>
    <div className="text">
{props.what}
</div>
</div> 

)
}

export default CommentDetails;