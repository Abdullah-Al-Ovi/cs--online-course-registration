
import PropTypes from 'prop-types';

Course.propTypes = {
    course: PropTypes.object.isRequired
    
};

function Course({course}) {
    const{title,description,image,price,credit}=course
    return (
        <div>
            <div  >
                <img  src={image} />
            </div>
            <div >
            <h3 >{title}</h3>
            <p >{description}</p>
            <div >
                <p><span ><i className="fa-solid fa-dollar-sign "></i></span>Price : {price}</p>
                <p><span><i className="fa-solid fa-book-open mr-2"></i></span>Credit : {credit}hr</p>
            </div>
            </div>
            <div >
                <button  >Select</button>
            </div>
        </div>
    );
}

export default Course;
