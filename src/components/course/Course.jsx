
import PropTypes from 'prop-types';

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
    
};

function Course({course,handleAddToCart}) {
    const{title,description,image,price,credit}=course
    return (
        <div  className='bg-[#FFF] rounded-xl text-start py-5 '>
            <div className='w-[90%] mx-auto mb-3 ' >
                <img className='w-[100%]' src={image} />
            </div>
            <div className='w-[90%] mx-auto' >
            <h3 className='text-base font-semibold mb-3' >{title}</h3>
            <p  className='text-xs text-stone-500 mb-3'>{description}</p>
            <div className='flex justify-between' >
                <p><span className='mr-2'><i className="fa-solid fa-dollar-sign "></i></span>Price : {price}</p>
                <p><span><i className="fa-solid fa-book-open mr-2"></i></span>Credit : {credit}hr</p>
            </div>
            </div>
            <div className=' text-center '>
                <button onClick={()=>handleAddToCart(course)}  className='text-white font-semibold bg-[#2F80ED] w-[90%] rounded  mt-3 text-center' >Select</button>
            </div>
        </div>
    );
}

export default Course;
