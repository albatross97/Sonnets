var margin_line = {top: 20, right: 150, bottom: 20, left: 40};
const poem_svg = d3.select("#poem").append("text")
    .attr("width",300)
    .attr("height",500)
    .attr("transform","translate(" + margin_line.left + "," + margin_line.top + ")");
const title = poem_svg.append('text').attr("class","sonnet");
const myol = poem_svg.append('ol');

const mycolor = d3.scaleOrdinal()
    .domain([1,154])
    .range(d3.schemeGnBu[9]);

function renderPoem(index,id) {
    title.selectAll('text').remove();
    myol.selectAll('li').remove();

    d3.csv("data/sonnets_revised.csv").then(function (raw_data) {
        data = raw_data.map(d => ({id: d.id, text: d.text, index: +d.index_num, line: +d.line}))
            const selected_data = data.filter(d => d.index == index);
            const mypoem = selected_data.filter(d => d.line != 0);
            const poem_index = selected_data.filter(d => d.line == 0);

            title.selectAll('text')
            .data(poem_index)
            .enter()
                .append('text')
                .style("color","grey")
                .style("font-size", "2rem")
                .text(d => `Sonnet ${d.text}`);

            myol.selectAll('li') // select all list elements (orange circle above)
            .data(mypoem)
            .enter()
                .append('li')
                .style("font-size", d => d.id == id ?  "1.15rem": "1rem")
                .style("font-weight", d => d.id == id ?  700: 300)   
                .style("color","grey")   
                .append('text')
                .text(d => `${d.text}`)
                .style("color",d => d.id == id ?"white":"grey")   
                .style("background",d => d.id == id ? "rgb(123, 204, 196)":"#DCDCDC");// add text to each list element
        
    })
}
renderPoem();