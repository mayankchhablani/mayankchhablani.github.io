// Annotations for Bubble Chart
const bubble_state_annotations = [         
{
    type: d3.annotationLabel,
    note: {
    title: "Majority of Reviews",
    label: "The state of NV contains the majority of the Yelp Dataset reviews",
    wrap: 190
    },
    x: 500,
    y: 550,
    dy: -160,
    dx: -120
}]

const bubble_state_makeAnnotations = d3.annotation()
    .type(d3.annotationLabel)
    .annotations(bubble_state_annotations)

const bubble_star_annotations = [
{
    type: d3.annotationLabel,
    note: {
    title: "Average 2-4 Stars",
    label: "Regardless of state, the average for star ratings is balanced between 2 to 4 stars",
    wrap: 190
    },
    x: 500,
    y: 200,
    dy: 0,
    dx: 0
}]

const bubble_star_makeAnnotations = d3.annotation()
    .type(d3.annotationLabel)
    .annotations(bubble_star_annotations)

// Annotations for Zoomable Sunburst
const zoom_annotations = [       
{
    type: d3.annotationLabel,
    note: {
    title: "Nevada Region",
    wrap: 190
    },
    x: 300,
    y: 175,
    dy: -170,//-75,
    dx: -300//-120
},
{
    type: d3.annotationLabel,
    note: {
    title: "Category: American (New) restaurant ",
    wrap: 190
    },
    x: 650,
    y: 200,
    dy: -200,//-100,
    dx: 50//200
},
{
    type: d3.annotationLabel,
    note: {
    title: "Others Ranked 25",
    wrap: 190
    },
    x: 700,
    y: 500,
    dy: 20,//150,
    dx: 150//200
}]

const zoom_makeAnnotations = d3.annotation()
    .type(d3.annotationLabel)
    .annotations(zoom_annotations)

d3.select("#zoomable_svg")
    .append("g")
    .attr("class", "annotation-group")
    .attr("id", "zoom_annotation")
    .call(zoom_makeAnnotations)

// Annotations for Line Chart
const line_annotations = [
{
    type: d3.annotationLabel,
    note: {
    title: "Weeknight Checkin Spike",
    label: "Spikes nightly for checkins",
    wrap: 190
    },
    x: 250,
    y: 125,
    dy: 0,
    dx: 0
},          
{
    type: d3.annotationLabel,
    note: {
    title: "Weekend Checkin Spike",
    label: "Increased spike of checkins over the weekend",
    wrap: 190
    },
    x: 650,
    y: 200,
    dy: -100,
    dx: -150
}]

const line_makeAnnotations = d3.annotation()
    .type(d3.annotationLabel)
    .annotations(line_annotations)

d3.select("#linechart_svg")
    .append("g")
    .attr("class", "annotation-group")
    .attr("id", "linechart_annotation")
    .call(line_makeAnnotations)
