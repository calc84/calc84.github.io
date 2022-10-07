let data = [];

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
        data: data
    });

}, false);

let valueCurr = '';

const evalinput = function () {
    document.getElementById('input').value = valueCurr;
    var output = document.getElementById('output');
    var input = document.getElementById('input');
    UI.eval_input(output, input);

};

const clickDigit = function (uniqueValue) {
    valueCurr += uniqueValue
    document.getElementById('input').innerHTML = valueCurr;
};


const addGraph = () => {
     let width = 400;
     let height = 400;
    data.push({
        fn: "sin(x)",
        closed: false
    })
    
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
        data: data
    });
}

let yValue = 0;

const downArrowGraph = () => {
    document.getElementById(`inpt${yValue}`).classList.remove("curr");

    if (yValue < 9) {
        yValue++;
    }

     document.getElementById(`inpt${yValue}`).classList.add("curr");
}

const upArrowGraph = () => {
    document.getElementById(`inpt${yValue}`).classList.remove("curr");

    if (yValue > 0) {
        yValue--;
    }

    document.getElementById(`inpt${yValue}`).classList.add("curr");

}

const graphPage = () => {
    const screen = document.getElementById('screen');
    screen.innerHTML = '<h1>test</h1>';
}

