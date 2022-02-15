import './style.css'
const Card = (props) =>{
    return(
        <div className="hero">
            <div className="content">
            <h1>{props?.title}</h1>
            <p>{props?.text}</p>       
        </div> 
            
        </div>
    )
}
export default Card;