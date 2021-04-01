import * as d3 from 'd3'

d3.select('div')
    .selectAllChildren('p')
    .data([1, 2, 3])
    .enter()
    .append('p');