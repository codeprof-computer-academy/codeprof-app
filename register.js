// logic to register new student

// target the register form
const register_form = document.querySelector(".register-form")

// listen to when users submit the form
register_form.addEventListener('submit', create_new_student)

//  define the function that gets called
function create_new_student(event){
      event.preventDefault() // to prevent submit event from reloading the page

    //   get the username of the student
    let username = document.querySelector(".username").value

    //  get the email
    let email = document.querySelector(".email").value

    // get the password
    let password = document.querySelector(".password").value

    // get the agreement
    let agree = document.querySelector(".agree").checked

    // create an object using the student details
    const new_student = {
           username, email, password, agree
    }


    // send the object to the database
    // check if username not existing before
    let username_found = registered_students.find(function(student){
           return student.username === username

    })

    let email_found = registered_students.find(function(student){
           return student.email === email
    })

    if(username_found){
           alert("Ooops username taken!")
    }else if(email_found){
               alert("Ooops! email taken")
    }else{
                // add the new student to the database
                registered_students.push(new_student)
                alert("registration successful!")
               
    }

    // check if email not existing before

}


// logic to show password

// target the show password button
const show_password_btn = document.querySelector(".show-btn")

// add click event listener to it
show_password_btn.addEventListener("click", show_password)

let show_user_password = true // flag variable

function show_password(){
   
    show_password_btn.classList.toggle("show-password-bg") // change the backgrou of the show-password-btn

    if(show_user_password){
         document.querySelector(".password").type = "text"
         show_user_password = false
    }else{
          document.querySelector(".password").type = "password"
         show_user_password = true
    }
}