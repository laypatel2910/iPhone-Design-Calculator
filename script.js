function Printvalue(n)
{
    document.getElementById('print').value+=n
}
function AllClear() {
    var n=" ";
    document.getElementById('print').value=n;
}
function Clear() {
    n=document.getElementById('print').value;
    document.getElementById('print').value=n.substr(0,n.length-1);
}
function Answer() {
    try {
        document.getElementById("print").value = eval(document.getElementById("print").value)
    }
    catch (error) {
        alert("Check Expression")
    }; 
}