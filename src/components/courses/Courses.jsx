
import PropTypes from 'prop-types';
import Course from '../course/Course';
import Cart from '../cart/Cart';
import { useEffect } from 'react';
import { useState } from 'react';


Courses.propTypes = {
    
};


function Courses() {
    const [courses,setCourses]=useState([])
    const [selectedCourse,setSelectedCourse]=useState([])
    
    const handleAddToCart=(course)=>{
       
      
            const newSelectedCourse =[...selectedCourse,course]
            setSelectedCourse(newSelectedCourse)
 
        }
        
        
    
    
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data=>setCourses(data))
    },[])
   
    return (
        <div className='flex justify-between '>
            <div className=' grid grid-cols-3 gap-3 w-[70%]  ' >
                {
                    courses.map((course,idx)=><Course 
                    key={idx} 
                    course={course}
                    handleAddToCart={handleAddToCart}
                    ></Course>)
                }
            </div>
            
                
                <Cart selectedCourse={selectedCourse} ></Cart>
              
            
        </div>
    );
}

export default Courses;