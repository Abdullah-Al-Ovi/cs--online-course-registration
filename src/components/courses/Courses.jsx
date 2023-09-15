
import Course from '../course/Course';
import Cart from '../cart/Cart';
import { useEffect } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Courses() {
    const [courses,setCourses]=useState([])
    const [selectedCourse,setSelectedCourse]=useState([])
    const [totalCredits,settotalCredits]=useState(0)
    const [remaining,setRemaining]=useState(20)
    const [price,setPrice]=useState(0)

    
    const handleAddToCart=(course)=>{
        let creditSum =course.credit;
        selectedCourse.forEach(item=>creditSum=creditSum+item.credit)

        const isPresesnt = selectedCourse.find(item=>item.id===course.id)

        if(isPresesnt){
            toast('You can not enroll a couse more than once.')
        }
        else{
            if(creditSum<=20){
               const newSelectedCourse =[...selectedCourse,course]
               setSelectedCourse(newSelectedCourse)
               settotalCredits(creditSum);
              const remainingCredit = 20-creditSum;
               setRemaining(remainingCredit);
               const totalPrice = price+course.price
               setPrice(totalPrice)
            } 
            else{
               toast('Your course credits can not exceed 20 hours.')
            }  
           
           }
 


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
            
                
                <Cart 
                    selectedCourse={selectedCourse}
                    totalCredits={totalCredits} 
                    remaining={remaining} 
                    price={price} >
                </Cart>
              
                <ToastContainer/>
        </div>
    );
}

export default Courses;