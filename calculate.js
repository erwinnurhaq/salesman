var a, b, c, d, hasilnettbundle, hasilnettunit;

function hitung() {
    a = document.getElementById("harganormal").value;
    b = document.getElementById("jumlahunit").value;
    c = document.getElementById("diskon1").value;
    d = document.getElementById("diskon2").value;

    hasilnettbundle = a - (a * (c / 100));
    hasilnettbundle -= (hasilnettbundle * (d / 100));
    hasilnettunit = hasilnettbundle / b;
    document.getElementById("hasilnettbundle").innerHTML = "Rp. " + hasilnettbundle.toFixed(2);
    document.getElementById("hasilnettunit").innerHTML = "Rp. " + hasilnettunit.toFixed(2);
}

function kosongkan() {
    document.getElementById("harganormal").value = "";
    document.getElementById("jumlahunit").value = "";
    document.getElementById("diskon1").value = "";
    document.getElementById("diskon2").value = "";
    document.getElementById("hasilnettbundle").innerHTML = "Rp. ";
    document.getElementById("hasilnettunit").innerHTML = "Rp. ";
}