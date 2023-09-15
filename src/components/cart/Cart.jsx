
import PropTypes from 'prop-types';


Cart.propTypes = {
    selectedCourse: PropTypes.array.isRequired,
    totalCredits: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired   

};

function Cart({selectedCourse,totalCredits,remaining,price}) {
   

    return (
        <div className='w-[28%]'>
            <div className='bg-[#FFF] p-5 rounded-xl '> 
            <div className='mt-5 '>
                <h2 className='text-[#2F80ED] text-lg font-bold'>Credit Hour Remaining {remaining} hr</h2>
            </div>
            <div className='border-b-2 my-3'></div> 
            <h2 className=' text-lg font-bold mb-3'>Course Name</h2>
            <div className='mb-7'>
            <ol>
                    {
                        selectedCourse.map((course,idx)=><li className='text-gray-500 text-sm' key={idx}>{idx+1}. {course.title}</li>)
                    }
                    </ol>
                    
            </div> 
            <div className='border-b-2 my-3'></div>
            <div><h3 className='font-semibold'>Total Credit Hour : {totalCredits}</h3></div>
            <div className='border-b-2 my-3'></div>
            <div><h3 className='font-semibold'>Total Price : {price} Tk</h3></div>
        </div>  
        </div>
    );
}

export default Cart;

