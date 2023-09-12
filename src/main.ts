import "./style.css";

import "svelte-sankey/webc/SankeyChart.js";
let sankey: any = document.getElementById("sv-sankey");
//let sankey2: any = document.getElementById("sv-sankey2");

let sankeydata = {
    data: [
        {
            id: "input",
            columnLabel: "Input",
            rows: [
                {
                    rowLabel: "Product",
                    items: [
                        { id: "flour", label: "Flour" },
                        { id: "biscuit", label: "Biscuit" }
                    ]
                },
                {
                    rowLabel: "Resource Usage",
                    items: [{ id: "chocolate_production", label: "Chocolate Production" }]
                }
            ]
        },
        {
            id: "root",
            columnLabel: "root",
            rows: [
                {
                    rowLabel: "Product",
                    items: [{ id: "semi_finished_good", label: "Semi-finished good" }]
                }
            ]
        },
        {
            id: "output",
            columnLabel: "Output",
            rows: [
                {
                    rowLabel: "Product",
                    items: [
                        { id: "strawberrycake", label: "Strawberry Cake" },
                        { id: "chococake", label: "Chocolate Cake" }
                    ]
                }
            ]
        }
    ],
    links: [
        {
            source: "flour",
            target: "semi_finished_good",
            value: 5
        },
        {
            source: "biscuit",
            target: "semi_finished_good",
            value: 3
        },
        {
            source: "chocolate_production",
            target: "semi_finished_good",
            value: 8
        },
        {
            source: "semi_finished_good",
            target: "strawberrycake",
            value: 8
        },
        {
            source: "semi_finished_good",
            target: "chococake",
            value: 8
        }
    ]
};

let sankeydata2 = {
    data: [
        {
            id: "input2",
            columnLabel: "Input",
            rows: [
                {
                    rowLabel: "Category",
                    items: [
                        { id: 1, label: "1" },
                        { id: 2, label: "2" }
                    ]
                }
            ]
        },
        {
            id: "root2",
            columnLabel: "root",
            rows: [
                {
                    rowLabel: "Category",
                    items: [{ id: 3, label: "3" }]
                }
            ]
        },
        {
            id: "output2",
            columnLabel: "Output",
            rows: [
                {
                    rowLabel: "End-Product",
                    items: [
                        { id: 4, label: "4" },
                        { id: 5, label: "5" }
                    ]
                }
            ]
        }
    ],
    links: [
        {
            source: 1,
            target: 2,
            value: 5
        },
        {
            source: 2,
            target: 3,
            value: 3
        }
    ]
};

sankey.chartdata = sankeydata;
//sankey2.chartdata = sankeydata2;
