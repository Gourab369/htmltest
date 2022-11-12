function validate(){
    if(valfname() && vallname() && valgender() && valeducation() && valemail() && checkworkxp() && num()) {display(1)}
    else display(0)
}
function valfname(){
    let fname=document.getElementById("fname").value
    let testn=/^[a-zA-Z]+$/
    if(!fname.match(testn)){
        document.getElementById("errfname").innerHTML="Alphabets Only"
        return false
    }else{
        document.getElementById("errfname").innerHTML=""
        return true
    }
}
function vallname(){
    let lname=document.getElementById("lname").value
    let testn=/^[a-zA-Z]+$/
    if(!lname.match(testn)){
        document.getElementById("errlname").innerHTML="Alphabets Only"
        return false
    }else{
        document.getElementById("errlname").innerHTML=""
        return true
    }
}
function valgender(){
    let em=document.getElementById("gender").value
    let teste=/^[female]|[Male]|[others]$/i
    //let testee=/^[other]|[others]$/i
    if(!em.match(teste)){
        document.getElementById("errgender").innerHTML="Invalid gender qualification"
        return false
    }else{
        document.getElementById("errgender").innerHTML=""
        return true
    }
}
function valeducation(){
    let em=document.getElementById("education").value
    let teste=/^[10]|[12]|[Diploma]|[Graduation]$/i
    if(!em.match(teste)){
        document.getElementById("erreducation").innerHTML="Invalid education qualification"
        return false
    }else{
        document.getElementById("erreducation").innerHTML=""
        return true
    }
}
function num(){
    let em=document.getElementById("phone").value
    let teste=/^[0-9]{10,10}$/
    if(!em.match(teste)){
        document.getElementById("errphone").innerHTML="Invalid phone number"
        return false
    }else{
        document.getElementById("errphone").innerHTML=""
        return true
    }
}
function valemail(){
    let em=document.getElementById("email").value
    let teste=/^([a-zA-Z0-9_#+]+)@([a-zA-Z]+)\.([a-zA-Z]{2,3})$/
    if(!em.match(teste)){
        document.getElementById("erremail").innerHTML="Invalid email format"
        return false
    }else{
        document.getElementById("erremail").innerHTML=""
        return true
    }
}
function checkworkxp(){
    let xp=parseInt(document.getElementById("workxp").value)
    if(xp<1){
        document.getElementById("errxp").innerHTML="not Eligible, should have atleast 1 year of experience"
        return false
    }else{
        document.getElementById("errxp").innerHTML=""
        return true
    }
}
document.getElementById("country").onchange=()=>{
    let con=document.getElementById("country").value
    if(con=="others")
    {
        document.getElementById("othersc").style="display:inline"
    }
    else{
        document.getElementById("othersc").style="display:none"
    }
}
function display(n){
    if(n) window.alert("Data inserted successfully")
}


