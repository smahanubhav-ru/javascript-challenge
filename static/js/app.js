var tableData = data;
var tbody = d3.select("tbody");
function tabulate(data){
tbody.html("");
data.forEach(function(sighting){
var tr = tbody.append("tr");
Object.values(sighting).forEach(function(value){
var td = tr.append("td");
td.text(value);});});}
function filteroutput(){
var date = d3.select("#datetime").property("value");
let result = tableData;
if (date){
result = result.filter(tr => tr.datetime === date);}
tabulate(result);}
d3.selectAll("#filter-btn").on("click", filteroutput);
tabulate(tableData);