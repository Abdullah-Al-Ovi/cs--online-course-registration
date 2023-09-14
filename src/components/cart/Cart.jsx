
import PropTypes from 'prop-types';


Cart.propTypes = {
 
};

function Cart() {
   

    return (
        <div className='w-[28%]'>
            <div className='bg-[#FFF] p-5 rounded-xl '> 
            <div className='mt-5 '>
                <h2 className='text-[#2F80ED] text-lg font-bold'>Credit Hour Remaining {} hr</h2>
            </div>
            <div className='border-b-2 my-3'></div> 
            <h2 className=' text-lg font-bold mb-3'>Course Name</h2>
            <div className='mb-7'>
              
                    
            </div> 
            <div className='border-b-2 my-3'></div>
            <div><h3>Total Credit Hour : {}</h3></div>
            <div className='border-b-2 my-3'></div>
            <div><h3>Total Price : {} USD</h3></div>
        </div>  
        </div>
    );
}

export default Cart;
