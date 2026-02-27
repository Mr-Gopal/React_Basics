function Card(props) {
    return (
        <div className="parent">
            <div className="card">
                <img src={props.url} alt="" />
                <h1>{props.user}</h1>
                <p>Welcome Mr. {props.user}!</p>
                <button>View Profile</button>
            </div>
        </div>
    )
}

export { Card } 