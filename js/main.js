function sentmail(){
    var paroms={
        name:document.getElementById("name").value ,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };


const serviceID=("service_3yy03ng")
const template=("template_7ohuo9c")
emailjs.send(serviceID,template,paroms)
.then(
    res=>{document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("message");
    console.log(res);
    alert("your message sent successfully")
})
.catch((err)=>console.log(err));
}