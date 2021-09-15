let namenode= document.getElementById("inputname");
let errornode1= document.getElementById("error1");

let emailnode= document.getElementById("inputemail");
let errornode2= document.getElementById("error2");

let contactnode= document.getElementById("inputcontact");
let errornode3= document.getElementById("error3");

function validate1()
{
    var regName = /^[a-zA-Z ]{2,100}$/;
    errornode1.innerHTML="";
    let name=namenode.value;
    if(name=="")
    {
        errornode1.innerHTML="This field is required";
        namenode.style.border="2px solid red";
        return false;
    }
    else if(!regName.test(name)){
        errornode1.innerHTML="Enter Valid Name";
        namenode.style.border="2px solid red";
        return false;
    }
    else{
        namenode.style.border="2px solid green";
        return true;
    }
}

function validate2()
{
    errornode2.innerHTML="";
    let email=emailnode.value;
    let ss=email.substring(email.indexOf("@")+1);
    if(email=="")
    {
        errornode2.innerHTML="This field is required";
        emailnode.style.border="2px solid red";
        return false;
    }
    else if(!email.includes("@") || ss==""){
        errornode2.innerHTML="Please put valid email Id";
        emailnode.style.border="2px solid red";
        return false;
    }
    else{
        emailnode.style.border="2px solid green";
        return true;

    }
}
function validate3()
{
    var regmobile = /^[6-9][0-9]{9}$/;
    errornode3.innerHTML="";
    let contact=contactnode.value;
    if(contact=="")
    {
        errornode3.innerHTML="This field is required";
        contactnode.style.border="2px solid red";
        return false;
    }
    else if(!regmobile.test(contact))
    {
        errornode3.innerHTML="Invalid Mobile Number.";
        contactnode.style.border="2px solid red";
        return false;
    }else{
        contactnode.style.border="2px solid green";
        return true;
    }
}


function validateForm(){
    let state1=validate1();
    let state2=validate2();
    let state3=validate3();

    return (state1 &&state2 && state3);
}
function validate(){
    let state0= validateForm();
    if(state0==true){
        window.alert("Submitted Successfully");
    }
    else{
        window.alert("Enter Details");
    }
   
}






