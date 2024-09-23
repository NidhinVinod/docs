function reg(){
    const userDetails={
     username:username.value,
     userId:userId.value,
     password:passWord.value
    }
    if (userDetails.username.length==" " || userDetails.userId.length ==" "||userDetails.password.length==" ") {
     alert('please enter your details')
    }
   
     else{
         if(userDetails.userId in localStorage){
             alert('already exsist')
         }
         else{
             localStorage.setItem(userDetails.userId,JSON.stringify(userDetails))
         alert('user details add successfully') 
         window.location='./index.html' 
         }
     }
 }  
 //login
 function login(){
    const userDetails={
        userId:userId.value,
        password:passWord.value
       }
       if (userDetails.userId.length==" " || userDetails.password.length==" ") {
        alert('please enter your details')
       }
       else{
           if(userDetails.userId in localStorage){
               const details=JSON.parse(localStorage.getItem(userDetails.userId))
               if(userDetails.password===details.password){
                   alert('login successfully')
                   window.location='./userInterFace.html'
               }
               else{
                   alert('wrong password')
               }
           }
           }
        }