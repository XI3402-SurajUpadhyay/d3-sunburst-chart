import React, { useEffect, useState } from "react";
import * as d3 from "d3";

var data = {
  name: "Txn",
  children: [
    {
      name: "Expense",
      children: [
        {
          name: "Bills",
          children: [
            { name: "Water", value: 3000 },
            { name: "Electricity", value: 6000 },
          ],
        },
        {
          name: "Petrol",
          value: 10000
        },
        {
          name: "Food",
          children: [
            { name: "grocery", value: 15000 },
            { name: "cooking oil", value: 2000 },
            { name: "Resturant", value: 5000 },
            {
              name: "Online",
              children: [
                { name: "Swiggy", value: 2000 },
                { name: "Zomato", value: 1000 },
                { name: "Dominous", value: 800 },
                { name: "Pizahut", value: 500 },
              ],
            },
            { name: "party", value: 3000 },
          ],
        },
        
        { name: "Mobile Recharge", value: 1000 },

        { name: "Rent", value: 35000 },
      ],
    },

    {
      name: "Investment",
      children: [
        {
          name: "Bank",
          children: [
            { name: "RD", value: 5000 },
            { name: "FD", value: 10000 },
          ],
        },
        { name: "crypto", value: 5000 },
        {
          name: "Share Market",
          children: [
            { name: "Stocks", value: 15000 },
            {
                name: "Mutual funds",
                children: [
                  { name: "debt", value: 5000 },
                  { name: "equity", value: 15000 },
                  { name: "liqued", value: 2000 },
                ],
              },
          ],
        },
      ],
    },

    {
      name: "Saving",
      children: [
        { name: "SBI Bank", value: 20000 },
        { name: "ICICI Bank", value: 25000 },
      ],
    },

    {
      name: "Entertainment",
      children: [
        {
          name: "OTT",
          children: [
            { name: "Amazon Prime", value: 499 },
            { name: "Netflix", value: 999 },
            { name: "Hotstar", value: 249 },
            { name: "voot", value: 249 },
          ],
        },
        {
          name: "Shopping",
          children: [
            { name: "Mall", value: 5000 },
            { name: "Myntra", value: 2000 },
            { name: "Amazon", value: 1500 },
          ],
        },
        {
          name: "Gaming",
          children: [{ name: "PS5", value: 2000 }],
        },
      ],
    },
  ],
};

const D3Chart = () => {
  const [isLoaded, setLoaded] = useState(false);
  const partition = (data) => {
    const root = d3
      .hierarchy(data)
      .sum((d) => d.value)
      .sort((a, b) => b.value - a.value);
    return d3.partition().size([2 * Math.PI, root.height + 1])(root);
  };

  const color = d3.scaleOrdinal(
    d3.quantize(d3.interpolateRainbow, data.children.length + 1)
  );

  const format = d3.format(",d");

  let width = 600;

  let radius = width / 6;

  const arc = d3
    .arc()
    .startAngle((d) => d.x0)
    .endAngle((d) => d.x1)
    .padAngle((d) => Math.min((d.x1 - d.x0) / 2, 0.005))
    .padRadius(radius * 1.5)
    .innerRadius((d) => d.y0 * radius)
    .outerRadius((d) => Math.max(d.y0 * radius, d.y1 * radius - 1));

  let chart = () => {
    const root = partition(data);

    root.each((d) => (d.current = d));

    const svg = d3
      .create("svg")
      .attr("viewBox", [0, 0, width, width])
      .style("font", "10px sans-serif")
      .style("font-weight", "bold");

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2},${width / 2})`);

    const path = g
      .append("g")
      .selectAll("path")
      .data(root.descendants().slice(1))
      .join("path")
      .attr("fill", (d) => {
        while (d.depth > 1) d = d.parent;
        return color(d.data.name);
      })
      .attr("fill-opacity", (d) =>
        arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0
      )
      .attr("pointer-events", (d) => (arcVisible(d.current) ? "auto" : "none"))

      .attr("d", (d) => arc(d.current));

    path
      .filter((d) => d.children)
      .style("cursor", "pointer")
      .on("click", clicked);

    path.append("title").text(
      (d) =>
        `${d
          .ancestors()
          .map((d) => d.data.name)
          .reverse()
          .join("/")}\n${format(d.value)}`
    );

    const label = g
      .append("g")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .style("user-select", "none")
      .selectAll("text")
      .data(root.descendants().slice(1))
      .join("text")
      .attr("dy", "0.35em")
      .attr("fill-opacity", (d) => +labelVisible(d.current))
      .attr("transform", (d) => labelTransform(d.current))
      .text((d) => d.data.name);

    const parent = g
      .append("circle")
      .datum(root)
      .attr("r", radius)
      .attr("fill", "none")
      .attr("pointer-events", "all")
      .on("click", clicked);

    function clicked(event, p) {
      parent.datum(p.parent || root);

      root.each(
        (d) =>
          (d.target = {
            x0:
              Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) *
              2 *
              Math.PI,
            x1:
              Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) *
              2 *
              Math.PI,
            y0: Math.max(0, d.y0 - p.depth),
            y1: Math.max(0, d.y1 - p.depth),
          })
      );

      const t = g.transition().duration(750);

      // Transition the data on all arcs, even the ones that aren’t visible,
      // so that if this transition is interrupted, entering arcs will start
      // the next transition from the desired position.
      path
        .transition(t)
        .tween("data", (d) => {
          const i = d3.interpolate(d.current, d.target);
          return (t) => (d.current = i(t));
        })
        .filter(function(d) {
          return +this.getAttribute("fill-opacity") || arcVisible(d.target);
        })
        .attr("fill-opacity", (d) =>
          arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0
        )
        .attr("pointer-events", (d) => (arcVisible(d.target) ? "auto" : "none"))

        .attrTween("d", (d) => () => arc(d.current));

      label
        .filter(function(d) {
          return +this.getAttribute("fill-opacity") || labelVisible(d.target);
        })
        .transition(t)
        .attr("fill-opacity", (d) => +labelVisible(d.target))
        .attrTween("transform", (d) => () => labelTransform(d.current));
    }

    function arcVisible(d) {
      return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
    }

    function labelVisible(d) {
      return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
    }

    function labelTransform(d) {
      const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
      const y = ((d.y0 + d.y1) / 2) * radius;
      return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
    }

    return svg.node();
  };

  useEffect(() => {
    if (!isLoaded) {
      console.log("segsf");
      setLoaded(true);
      if (!document.getElementById("myChart").hasChildNodes()) {
        document.getElementById("myChart").append(chart());
      }
    }
  }, []);
  return (
    <div>
      
      <div
        id="myChart"
        style={{
          width: "600px",
          height: "600px",
        }}
      ></div>
    </div>
  );
};

export default D3Chart;
