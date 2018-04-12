function myFunction() {
   document.getElementById("entrybutton").addEventListener("click", function() {
			var txt = document.getElementById("entry").value;
			document.getElementById("output").innerHTML = txt;
			alert("Jared McVey: " + txt)})
}
