/*  datasets: [{
            label: "Dataset 1",
            data: [-4, -3, -2, -1, 0, 1, 2,3,4],
            color: darkMode ? "#c0d0e0" : undefined, // dark mode
            borderColor: Utils.CHART_COLORS.blue,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.64),
        borderDash: [20, 10],
            
        }, {
            label: "Dataset 2",
             data: [5, 5, 5, 5, 5, 5, 5],
            color: darkMode ? "#c0d0e0" : undefined, // dark mode
            borderColor: Utils.CHART_COLORS.blue,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.74),
            fill:'-1'
        }, {
            label: "Dataset 3",
            data: [-2, -2, -2, -2, -2, -2, -2, -2, -2],
            color: darkMode ? "#c0d0e0" : undefined, // dark mode
            borderColor: Utils.CHART_COLORS.red,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.74),
            borderDash: [20, 10],

        }, {
            label: "Dataset 4",
            data: [5, 5, 5, 5, 5, 5, 5],
            color: darkMode ? "#c0d0e0" : undefined, // dark mode
            borderColor: Utils.CHART_COLORS.red,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.74),
            fill: '-1'
        }, {
            label: "Dataset 5",
            data: [-1, -1, -1, -1, -1, -1, -1, -1, -1],
            color: darkMode ? "#c0d0e0" : undefined, // dark mode
            borderColor: Utils.CHART_COLORS.purple,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.purple, 0.74),
            borderDash: [20, 10],

        }, {
            label: "Dataset 6",
            data: [5, 5, 5, 5, 5, 5, 5],
            color: darkMode ? "#c0d0e0" : undefined, // dark mode
            borderColor: Utils.CHART_COLORS.purple,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.purple, 0.74),
            fill: '-1'
        }, {
            label: "Dataset 7",
            data: [-3, -3, -3, -3, -3, 5, 5, 5, 5],
            color: darkMode ? "#c0d0e0" : undefined, // dark mode
            borderColor: Utils.CHART_COLORS.grey,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.grey, 0.74),
            borderDash: [20, 10],

        }, {
            label: "Dataset 8",
            data: [5, 5, 5, 5, 5, 5, 5],
            color: darkMode ? "#c0d0e0" : undefined, // dark mode
            borderColor: Utils.CHART_COLORS.grey,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.grey, 0.74),
            fill: '-1'
        }, {
            label: "Dataset 9",
            data: [-4, -4, -4,5, 5, 5, 5, 5, 5],
            color: darkMode ? "#c0d0e0" : undefined, // dark mode
            borderColor: Utils.CHART_COLORS.orange,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.orange, 0.74),
            borderDash: [20, 10],

        }, {
            label: "Dataset 10",
            data: [5, 5, 5, 5, 5, 5, 5],
            color: darkMode ? "#c0d0e0" : undefined, // dark mode
            borderColor: Utils.CHART_COLORS.orange,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.orange, 0.74),
            fill: '-1'
        }, {
            label: "Dataset 11",
            data: [-3.5, -3.5, -4, -4, 5, 5, 5, 5, 5],
            color: darkMode ? "#c0d0e0" : undefined, // dark mode
            borderColor: Utils.CHART_COLORS.yellow,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.yellow, 0.74),
            borderDash: [20, 10],

        }, {
            label: "Dataset 12",
            data: [5, 5, 5, 5, 5, 5, 5],
            color: darkMode ? "#c0d0e0" : undefined, // dark mode
            borderColor: Utils.CHART_COLORS.yellow,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.yellow, 0.74),
            fill: '-1'
        },
        
    ] */
const xLabel = [-3, -2, -1, 0, 1, 2, 3];


const subNum = ['₁', '₂', '₃', '₄', '₅'];
let newLine = 0;

const darkMode = false;


function handler(chart) {

    chart.options.scales.x.position = {
        y: 0
    };
    chart.options.scales.y.position = {
        x: xLabel.indexOf(0)
    };
    chart.update();
}

function addLine(chart) {
    const data = chart.data;
    const dsColor = Utils.namedColor(chart.data.datasets.length);
    const newDataset = {
        label: "Dataset " + (data.datasets.length + 1),
        backgroundColor: Utils.transparentize(dsColor, 0.5),
        borderColor: dsColor,
        borderWidth: 1,
        data: [1, 2, 3, 4, 5]
    };
    chart.data.datasets.push(newDataset);
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
    color: "#c0d0e0", // added for dark mode
    labels: xLabel,
    datasets: [{
        label: `y${subNum[newLine]}`,
        data: [-4, -3, -2, -1, 0, 1, 2, 3, 4],
        color: darkMode ? "#c0d0e0" : undefined, // dark mode
        borderColor: Utils.CHART_COLORS.blue,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.64),

    }, ]
};

let config = {
    type: "line", // other types need config adjustments
    data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,

                color: darkMode ? "#c0d0e0" : undefined,
            },
        },
        scales: { // added for dark mode
            y: {
                ticks: {
                    color: darkMode ? "#c0d0e0" : undefined
                },
                grid: {
                    // source: https://www.chartjs.org/docs/master/samples/scale-options/grid.html
                    color: (context) => {
                        if (context.tick.value > 0) {
                            return Utils.transparentize(Utils.CHART_COLORS.green, 0.5);
                        } else if (context.tick.value < 0) {
                            return Utils.transparentize(Utils.CHART_COLORS.red, 0.5);
                        }
                        return '#c0d0e0';
                    },
                },
                min: -4,
                max: 4
            },
            x: {
                ticks: {
                    color: darkMode ? "#c0d0e0" : undefined
                },
                grid: {
                    color: "#aaa"
                },
            },
        },
    }
};
// added for dark mode
const body = document.querySelector("body");
if (darkMode) {
    config.options.scales = { // added for dark mode
        y: {
            ticks: {
                color: "#c0d0e0"
            },
            grid: {
                // source: https://www.chartjs.org/docs/master/samples/scale-options/grid.html
                color: function (context) {
                    if (context.tick.value > 0) {
                        return Utils.transparentize(Utils.CHART_COLORS.green, 0.5);
                    } else if (context.tick.value < 0) {
                        return Utils.transparentize(Utils.CHART_COLORS.red, 0.5);
                    }
                    return '#c0d0e0';
                },
            },
        },
        x: {
            ticks: {
                color: "#c0d0e0"
            },
            grid: {
                color: "#909090"
            },
        },
    };
    body.className = "dark";
}
// source: other docs, not the samples
const ctx = document.getElementById("myChart");
let myChart = new Chart(ctx, config);

handler(myChart);
