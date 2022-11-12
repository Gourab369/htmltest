$(document).ready(()=>{
    let datetime=new Date();
    let fulldate=datetime.toLocaleDateString();
    let m=parseInt(fulldate.substring(0,2));
    let d=parseInt(fulldate.substring(3,5));
    let y=parseInt(fulldate.substring(6,10));
    $("#dob").attr("min",(`${parseInt(y)-100}-01-01`));
    $("#dob").attr("max",(`${y}-${m}-${d}`));

    $("#formfile").on("change",()=>{
        let fileexten=$("#formfile").val()
        let tests=/\.txt|\.pdf$/
        if(!tests.test(fileexten)){
            $("#errfile").text("Invalid File format only .txt and .pdf allowed")
        }else $("#errfile").text("")
    });

    $("#butsub").click(()=>{
        let tests=/^[a-zA-Z]+$/
        if(!tests.test($("#fname").val())){
            $("#errfname").text("Alphabets only")
        }else{$("#errfname").text("")}

        let etests=/^([a-zA-Z0-9_#+]+)@([a-zA-Z]+)\.([a-zA-Z]{2,3})$/
        if(!$("#email").val().match(etests)){
            $("#erremail").text("Invalid format")
        }else{$("#erremail").text("")}

        let fileexten=$("#formfile").val()
        let ftests=/\.txt|\.pdf$/
        if(!ftests.test(fileexten)){
            $("#errfile").text("Invalid File format only .txt and .pdf allowed")
        }else $("#errfile").text(" ")

    });
});