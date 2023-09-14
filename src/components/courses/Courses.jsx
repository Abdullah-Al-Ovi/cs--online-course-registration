
import PropTypes from 'prop-types';
import Course from '../course/Course';
import Cart from '../cart/Cart';
import { useEffect } from 'react';
import { useState } from 'react';


Courses.propTypes = {
    
};

function Courses() {
    const [courses,setCourses]=useState([])
    
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data=>setCourses(data))
    },[])
   
    return (
        <div className='flex justify-between '>
            <div  >
                {
                    courses.map((course,idx)=><Course key={idx} course={course}></Course>)
                }
            </div>
            
                
                <Cart></Cart>
              
            
        </div>
    );
}

export default Courses;