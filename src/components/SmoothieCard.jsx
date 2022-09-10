 const SmoothieCard = (props) => {
    return( 
        <div className="smoothie-card">
            <h3>{props.smoothie.title}</h3>
            <p>{props.smoothie.method}</p>
            <div className="rating">{props.smoothie.rating}</div>
        </div>
    )
 }

 export default SmoothieCard