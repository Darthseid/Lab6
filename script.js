document.addEventListener("DOMContentLoaded", function(event) { 

  document.getElementById("entrybutton").addEventListener("click", function() {
  
    var txt = document.getElementById("entry").value;

    document.getElementById("output").innerHTML = txt;

    console.log("Jared McVey: " + txt);
	alert("Jared McVey: " + txt);

  });
  
});