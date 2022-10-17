



const subNum = ['₁', '₂', '₃', '₄', '₅'];
let newLine = 0;

const darkMode = false;


function handler(chart) {

    chart.options.scales.x.position = 'center';
    chart.options.scales.y.position = 'center';
    chart.update();
}

function addLine(chart, newData) {
    console.log(chart.data);
      
      chart.data.datasets = newData;
      chart.update();
  }

// source: https://www.chartjs.org/docs/master/samples/utils.html
// thanks @LeeLenaleee & @etimberg! 
const CHART_COLORS = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(101, 103, 107)"
};
const NAMED_COLORS = [
    CHART_COLORS.red,
    CHART_COLORS.orange,
    CHART_COLORS.yellow,
    CHART_COLORS.green,
    CHART_COLORS.blue,
    CHART_COLORS.purple,
    CHART_COLORS.grey,
];


const Utils = {

    "CHART_COLORS": CHART_COLORS,
    "NAMED_COLORS": NAMED_COLORS,
 
    
    transparentize(value, opacity) {
        var alpha = opacity === undefined ? 0.5 : 1 - opacity;
        return window["@kurkle/color"](value).alpha(alpha).rgbString();
    },

};


const data = {
    datasets: [],
};

const config = {
    type: 'scatter',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: false,
            }
        },
        scales: {
            x: {
                min: -10,
                max: 10,
            },
            y: {
                min: -10,
                max: 10,
            }
        }
    },
};

// added for dark mode
const body = document.querySelector("body");

// source: other docs, not the samples
const ctx = document.getElementById("myChart");
let myChart = new Chart(ctx, config);

handler(myChart);

