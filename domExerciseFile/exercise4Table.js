const theTable = document.querySelectorAll('#dataTable tr');

function toggleColumn(index){
    theTable.forEach((row)=>{
       const cell = row.cells[index];
       console.log(cell.style.display);
       if(cell.style.display != 'none'){
            cell.style.display = 'none';
       }else{
        cell.style.display ='';
       }
    })
}

function resetTable(){
    theTable.forEach((row)=>{
        const cells = Array.from(row.cells);
        cells.forEach((cell)=>{
            cell.style.display = '';
        })
    })
}