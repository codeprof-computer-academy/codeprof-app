// logic to display all the courses
const courses_container = document.querySelector("article")

courses.forEach(function(course){
              
       let course_card = `<div class="course-card">
                        <img src=${course.image} alt="" width="150">
                        <h5>${course.title}</h5>
                        <small>${course.duration}</small>
                        <p><b>${course.price}</b></p>
                        <button>See Details</button>
                    </div>`
                    
       courses_container.innerHTML += course_card
})
