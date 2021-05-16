var margin_line = {top: 20, right: 150, bottom: 20, left: 40};
const poem_svg = d3.select("#poem").append("text")
    .attr("width",300)
    .attr("height",500)
    .attr("transform","translate(" + margin_line.left + "," + margin_line.top + ")");
const title = poem_svg.append('text').attr("class","sonnet");
const ol = poem_svg.append('ol');

function renderPoem(index,id) {
    title.selectAll('text').remove();
    ol.selectAll('li').remove();

    d3.csv("data/sonnets_revised.csv").then(function (raw_data) {
        data = raw_data.map(d => ({id: d.id, text: d.text, index: +d.index_num, line: +d.line}))
            selected_data = data.filter(d => d.index == index);
            mypoem = selected_data.filter(d => d.line != 0);
            poem_index = selected_data.filter(d => d.line == 0);

            title.selectAll('text')
            .data(poem_index)
            .enter()
                .append('text')
                .style("font-size", "2.5rem")
                .text(d => `Sonnet ${d.text}`);

            ol.selectAll('li') // select all list elements (orange circle above)
            .data(mypoem)
            .enter()
                .append('li')
                .style("font-size", "1rem")
                .style("color", d => d.id == id ? "rgb(78, 179, 211)" : "#212529")   
                .style("font-weight", d => d.id == id ?  700: 400)   
                .text(d => `${d.text}`);// add text to each list element
        
    })
}
renderPoem();