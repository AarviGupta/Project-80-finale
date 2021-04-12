var inputs=[];
var display_inputs_array=[];
function getpara1(){
    for(var m=1;m<=6;m++){
        var para1inputs=document.getElementById("para1_input_"+m).value;
        console.log(para1inputs);
        inputs.push(para1inputs);
        inputs.join(". ")
     }
     var len_inputs=inputs.length;
     console.log(len_inputs);
     for(var a=0;a<len_inputs;a++){
         display_inputs_array.push("<h2>"+inputs[a]+"</h2>");
         console.log(display_inputs_array);
     }
     document.getElementById("para1_inputs_div").innerHTML=display_inputs_array;
     document.getElementById("para1_inputs_div").innerHTML=inputs.join(". ")
}

var input=[];
var display_input_array=[];
function getpara2(){
    for(var n=1;n<=6;n++){
        var para2inputs=document.getElementById("para2_input_"+n).value;
        console.log(para2inputs);
        input.push(para2inputs);
        input.join(". ")
     }
     var len_input=input.length;
     console.log(len_input);
     for(var b=0;b<len_input;b++){
         display_input_array.push("<h2>"+input[b]+"</h2>");
         console.log(display_input_array);
     }
     document.getElementById("para2_inputs_div").innerHTML=display_input_array;
     document.getElementById("para2_inputs_div").innerHTML=input.join(". ")
}