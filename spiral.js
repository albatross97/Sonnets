
/* checkbox eventlistner */
document.getElementById("love").addEventListener("input", e=>{ renderSpiral();});
document.getElementById("beauty").addEventListener("input", e=>{ renderSpiral();});
document.getElementById("time").addEventListener("input", e=>{ renderSpiral();});

let checklove = false;
let checkbeauty = false;
let checktime = false;


var diameter = 700
const svg = d3.select("#spiral").append("svg")
      .attr("viewBox", `0 0 ${diameter} ${diameter}`); 

function renderSpiral() {
    d3.csv("data/sonnets_revised.csv").then(function (data) {
        sample = data.map(d => ({date: d.id, value: +d.word, text: d.text, line: +d.line, index: +d.index_num}))
        var allCheck = [];
        checklove = document.getElementById("love").checked;
        checkbeauty = document.getElementById("beauty").checked;
        checktime = document.getElementById("time").checked;
        if (checklove) allCheck.push("love");
        if (checkbeauty) allCheck.push("beauty");
        if (checktime) allCheck.push("time");
        console.log(allCheck);

        svg.selectAll('g').remove();
        const chart = new TimeSpiral(svg)
            .size([diameter, diameter])
            .layers(4)    
            .style({
                align: "base",
                tickInterval: "auto",
            })    
            .palette(d3.schemeGnBu[9])
            .field({value:"value", text:"text", line:"line", index:"index"})
            .data(sample)
            .render();
    })
}
renderSpiral();
