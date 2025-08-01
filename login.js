// logic to log users in

// target the login form
const login_form = document.querySelector(".login-form")

// add submit event to it
login_form.addEventListener('submit', log_user_in)

function log_user_in(event){
    event.preventDefault()
    // grab the username
    let username = document.querySelector(".username").value
    // grab the password
    let password = document.querySelector(".password").value

    // check if the user exist on the databse
    let user_exist = registered_students.find(function(student){
             return student.username === username && student.password === password
    })
    
    // if user exist , log the user in
    if(user_exist){
           login_form.innerHTML = `
             <label class="profile-group">
                     <img src="./images/avatar.png" alt="" width="100" class="profile-image">
                     <input type="file" class="upload">
                     Upload Profile Image
            </label>
            <div class="student-details">
                    <p>
                            <span>stduent id</span>:<span>CCA/0<b>${user_exist.id}</b></span>
                    </p>
                    <p>
                            <span>username</span>: <span>${user_exist.username}</span>
                    </p>

                    <p>
                        <span>email</span>: <span>${user_exist.email}</span>
                    </p>

                    <p>
                        <span>password</span>: <span>${user_exist.password}</span>
                    </p>

                    

            </div>
            <a href="">Logout →</a>
           `

        //    logic to upload profile image
        document.querySelector(".upload").addEventListener("change", function(event){
                 
                      let uploaded_image = event.target.files[0]
                    
                    //   convert to object url
                    let uploaded_image_url = URL.createObjectURL(uploaded_image)

                    document.querySelector(".profile-image").src = uploaded_image_url

        })


    }else{
            // else alert invalid login credential
          login_form.innerHTML = `<h2>Invalid login credentials</h2> `
    }

   
       
}