import profilePic from './assets/profile.jpeg'

function Card(){
    return(
        <div className="card">
            <img src="https://via.placeholder.com/150" className='card-image' alt="" />
            <h2 className='card-title'>Ashraf P</h2>
            <p className='card-text'> Full stack developer</p>
        </div>
    );

}

export default Card