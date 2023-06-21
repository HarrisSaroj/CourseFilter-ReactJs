import React from 'react'
import Card from './Card';
import { useState } from 'react';

export const Cards = (props) => {
    
    let courses = props.courses;
    let category = props.category;

    const [likedCourses, setLikedCourses] = useState([]);

    // Sare Alag alag courses ko Ek Ek single Array mai Laya gaya hai 
    // api mai alag alag the : development , business inke value ko single array mai aae hai

    // It returns a single list of all courses received from the apo]i
    function getCourses(){

        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach(array=>{
                array.forEach((courseData)=>{ 
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else{
            // mai sirf specific ka array pass krunga
            return courses[category];   
        }
    }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            getCourses().map((course) => {
               return <Card key={course.id} 
               course={course}
               likedCourses={likedCourses}
               setLikedCourses={setLikedCourses}></Card>
            })
        }
    </div>
  )
}
export default Cards;