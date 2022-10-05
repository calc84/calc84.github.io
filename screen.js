document.addEventListener('DOMContentLoaded', function () {
    let width = 400;
    let height = 400;


    functionPlot({
        target: "#root",
        width,
        height,
        disableZoom: true,
        yAxis: {
            domain: [-10, 10]
        },
        xAxis: {
            domain: [-10, 10]
        },
        grid: true,
        fnType: 'implicit',
        data: [{
            fn: "sin(x)",
            closed: false
        }, {
            fn: "x^3",
            closed: false
        }, ]
    });

}, false);

let valueCurr = '';

var evalinput = function () {
    document.getElementById('input').value = valueCurr;
    var output = document.getElementById('output');
    var input = document.getElementById('input');
    UI.eval_input(output, input);

};

var clickDigit = function (uniqueValue) {
    valueCurr += uniqueValue
    document.getElementById('input').innerHTML = valueCurr;
};

/* var showGraph = function () {
    const el = document.getElementById('wrapper') ;
    el.style.display = "unset"

}
 */