const canvas = document.getElementById('pieChart');
const canvas1 = document.getElementById('pieChart1');
const ctx = canvas.getContext('2d');
const ctx1 = canvas1.getContext('2d');

// Data for the pie chart
const data = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green'],
    // values: [30, 50, 10, 10],
    // colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
    labels: ['Red', 'Blue'],
    values: [50, 50],
    colors: ['#ffb583', '#FF6F1E']
};

// Function to draw the pie chart
function drawPieChart(data) {
    const total = data.values.reduce((sum, value) => sum + value, 0);
    let startAngle = 0;

    // // Begin a new path
    // ctx.beginPath();

    // // Set the starting point
    // ctx.moveTo(100, 0);

    // // Set the ending point
    // ctx.lineTo(100, 200);

    // // Set the color of the line
    // ctx.strokeStyle = 'black';

    // // Draw the line
    // ctx.stroke();


    data.values.forEach((value, index) => {
        const sliceAngle = (value / total) * 2 * Math.PI;

        // Draw the slice
        ctx.beginPath();
        ctx.moveTo(50, 50); // Move to the center
        ctx.arc(50, 50, 49.5, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = data.colors[index];
        ctx.fill();

        // Update the start angle for the next slice
        startAngle += sliceAngle;
    });
}

// Call the function to draw the pie chart
drawPieChart(data);




// Data for the pie chart
const data1 = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green'],
    // values: [30, 50, 10, 10],
    // colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
    labels: ['Red', 'Blue'],
    values: [67,33 ],
    colors: ['#FF6F1E', '#ffb583']
};

// Function to draw the pie chart
function drawPieChart1(data1) {
    const total1 = data1.values.reduce((sum1, value1) => sum1 + value1, 0);
    let startAngle1 = 0;

    // // Begin a new path
    // ctx.beginPath();

    // // Set the starting point
    // ctx.moveTo(100, 0);

    // // Set the ending point
    // ctx.lineTo(100, 200);

    // // Set the color of the line
    // ctx.strokeStyle = 'black';

    // // Draw the line
    // ctx.stroke();


    data1.values.forEach((value1, index1) => {
        const sliceAngle1 = (value1 / total1) * 2 * Math.PI;

        // Draw the slice
        ctx1.beginPath();
        ctx1.moveTo(50, 50); // Move to the center
        ctx1.arc(50, 50, 49.5, startAngle1, startAngle1 + sliceAngle1);
        ctx1.closePath();
        ctx1.fillStyle = data1.colors[index1];
        ctx1.fill();

        // Update the start angle for the next slice
        startAngle1 += sliceAngle1;
    });
}

// Call the function to draw the pie chart
drawPieChart1(data1);






// JavaScript to dynamically create the line graph with dots

// const dataPoints = [
//     { x: 0, y: 75 },
//     { x: 40, y: 51 },
//     { x: 80, y: 66 },
//     { x: 120, y: 79 },
//     { x: 160, y: 15 },
//     { x: 200, y: 96 },
//     { x: 240, y: 40 },
//     { x: 280, y: 63 },
//     { x: 320, y: 64 },
//     { x: 360, y: 79 },
//     { x: 400, y: 21 },
//     { x: 440, y: 73 },
//     { x: 480, y: 86 },
//     { x: 520, y: 44 },
//     { x: 560, y: 44 }
//   ];
  
//   const svg = document.querySelector('.chart');
//   let pathData = 'M' + dataPoints.map(point => `${point.x},${point.y}`).join(' L ');
  
//   const line = document.querySelector('.line');
//   line.setAttribute('d', pathData);
  
//   dataPoints.forEach(point => {
//     const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
//     dot.setAttribute('class', 'dot');
//     dot.setAttribute('cx', point.x);
//     dot.setAttribute('cy', point.y);
//     dot.setAttribute('r', 4);
//     svg.appendChild(dot);
//   });