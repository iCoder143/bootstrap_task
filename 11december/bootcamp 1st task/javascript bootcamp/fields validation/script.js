

// function myFunction(){
//     if(document.getElementById("input1").value==""){
//         var parashow =document.getElementById("P1").innerHTML="Please Fill The Field"
//  }
//  else{
//     var parashow =document.getElementById("P1").innerHTML=""
// }
// }

// function myFunction(){
//     var eduInput = document.getElementsByName('ono[]');
// 	for (i=0; i<eduInput.length; i++)
// 		{  
// 		 if (eduInput[i].value == "")
// 			{
// 		 	 alert('Complete all the fields');		 
// 		 	 return false;
// 			}
// 		}
// }

// function CheckPassword() 
// { 
// var passw=  /^[A-Za-z]\w{7,14}$/;
// if(document.getElementById("input2").value.match(passw)) 
// { 
//     document.getElementById("P2").innerHTML=""
// }
// else
// { 
//     document.getElementById("P2").innerHTML="Enter Characters Between 7 to 14"
//     document.getElementById("P2").style.color="Red"
// }
// }





// function CheckName() 
// { 
// var nam=  /^[A-Za-z]\w{3,30}$/;
// if(document.getElementById("input1").value.match(nam)) 
// { 
//     document.getElementById("P1").innerHTML=""
// }
// else
// { 
//     document.getElementById("P1").innerHTML="Enter Atleast 3 Characters"
//     document.getElementById("P1").style.color="Red"
// }
// }







// function CheckEmail() 
// { 
// var mail=  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(document.getElementById("input3").value.match(mail)) 
// { 
//     document.getElementById("P3").innerHTML=""
// }
// else
// { 
//     document.getElementById("P3").innerHTML="Enter a valid Email"
//     document.getElementById("P3").style.color="Red"
// }
// }










// function myFunction() {
//     var nam = /^[A-Za-z]\w{3,30}$/;
//     var passw = /^[A-Za-z]\w{7,14}$/;
//     var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//     if (document.getElementById("input1").value.match(nam)) {
//         document.getElementById("P1").innerHTML = ""
//     }
//     else {
//         document.getElementById("P1").innerHTML = "Enter Atleast 3 Characters"
//         document.getElementById("P1").style.color = "Red"
//     }

//     if (document.getElementById("input2").value.match(passw)) {
//         document.getElementById("P2").innerHTML = ""
//     }
//     else {
//         document.getElementById("P2").innerHTML = "Enter Characters Between 7 to 14"
//         document.getElementById("P2").style.color = "Red"
//     }
//     if (document.getElementById("input3").value.match(mail)) {
//         document.getElementById("P3").innerHTML = ""
//     }
//     else {
//         document.getElementById("P3").innerHTML = "Enter a valid Email"
//         document.getElementById("P3").style.color = "Red"
//     }
// }



function myFunction() {
    var nam = /^[A-Za-z]\w{3,30}$/;
    var passw = /^[A-Za-z]\w{7,14}$/;
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let N = document.getElementById("input1").value;
    let P = document.getElementById("input2").value;
    let E = document.getElementById("input3").value;

    let nm = N.match(nam)
    let pm = P.match(passw)
    let em = E.match(mail)

    let nError = pError = eError = true;

    if (N == "") {
        document.getElementById("P1").innerHTML = "Please Fill This Field"
        document.getElementById("P1").style.color = "Red"

    }
    else {


        if (nm == null) {
            document.getElementById("P1").innerHTML = "Enter Atleast 3 Characters"
            document.getElementById("P1").style.color = "Red"
        }
        else {
            document.getElementById("P1").innerHTML = ""
            nError = false;
        }
    }


    if (P == "") {
        document.getElementById("P2").innerHTML = "Please Fill This Field"
        document.getElementById("P2").style.color = "Red"

    }
    else {


        if (pm == null) {
            document.getElementById("P2").innerHTML = "Enter Characters Between 7 to 14"
            document.getElementById("P2").style.color = "Red"
        }
        else {
            document.getElementById("P2").innerHTML = ""
            pError = false;
        }
    }

    if (E == "") {
        document.getElementById("P3").innerHTML = "Please Fill This Field"
        document.getElementById("P3").style.color = "Red"
    }
    else {



        if (em == null) {
            document.getElementById("P3").innerHTML = "Enter a valid Email"
            document.getElementById("P3").style.color = "Red"
        }
        else {
            document.getElementById("P3").innerHTML = ""
            eError = false;
        }
    }
    
    if(nError || pError || eError == true){
        return false;
    }
    else{
        document.write("Thanks For Registration")
    }
}
