import nayan from "../images/nayan.jpeg"
import './Body.css'

function Body(){
    return (
        <div className='body'>
            <div className='details'>
                <h3>
                    Hello, This is nayan.
                </h3>
            </div>
            <div className='image'>
                <img src={nayan} alt="nayan" />
            </div>
        </div>
    );
}

export default Body;