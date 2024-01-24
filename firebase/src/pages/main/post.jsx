export const Post=(props)=>{
    return (
        <div>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div>
                <p>{props.description}</p>
            </div>
            <div>
                <p>{props.username}</p>
                <button>Like</button>
            </div>
        </div>
    )
}