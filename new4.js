function block(){
    var Ename = document.getElementById("Ename").value;
    var Ecity = document.getElementById("Ecity").value;
    var Enumber = document.getElementById("Enumber").value;
	var Edepartment = document.getElementById("Edepartment").value;
   
  
    var table = document.getElementsByTagName('table')[0];
	
  var row = table.insertRow(4);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = Ename;
  cell2.innerHTML = Ecity;
  cell3.innerHTML = Enumber;
  cell4.innerHTML = Edepartment;
};