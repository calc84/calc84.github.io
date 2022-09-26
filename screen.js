
let valueCurr = '';

var evalinput = function () {
document.getElementById('input').value  = valueCurr;
 var output=document.getElementById('output');
 var input=document.getElementById('input');
    UI.eval_input(output, input);
    
};

var clickDigit = function (uniqueValue) {
    valueCurr += uniqueValue
    document.getElementById('input').innerHTML  = valueCurr;
};
