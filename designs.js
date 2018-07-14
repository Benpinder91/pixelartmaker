// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//get rows and get columns
let n = rows;
let rows = $("#inputHeight").val();
let m = columns;
let columns = $("#inputWidth").val();
//get table
const table = $("#pixelCanvas");
// reset table
   table.children().remove();
//make grid function
function makeGrid() {
//create rows
for (rows = 0; rows <= n; rows++){
    table.append("<tr></tr>");
//create columns
    for (columns = 0; columns <= m; columns++){
        table.children().last().append("<td></td>");
    }
 }
//listen for clicks on cell
table.on("click", "td", function()
{
//get colour
    let color=$("input[type='color']").val();
//apply color to cell
    $(this).attr("bgcolor", color);
 });
}

//listen for clicks on buttons to make grid
$("input[type='submit']").click(function(e){
    e.preventDefault();
    makeGrid();
});