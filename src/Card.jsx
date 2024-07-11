import ProfilePic from "./assets/logo.svg"
function Card(){

    return(
        <div className="card">
        <img className=" card-image"src = {ProfilePic} alt = "Profile Pic"></img>
        <h2 className="card-title">Harshit</h2>
        <p className="card-text">i'm full stack developer</p>
        </div>
    )
}

export default Card;