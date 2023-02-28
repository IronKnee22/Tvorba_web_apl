function myFunction() {
    vaha = document.getElementById('vaha').value;
    vyska = document.getElementById('vyska').value;
    document.getElementById("demo").innerHTML = vaha/(vyska*vyska)*10000;

}