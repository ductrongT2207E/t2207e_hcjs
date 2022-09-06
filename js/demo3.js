var x = 0;
var flag = false;
function demoEvent() {
    if(flag == false){
        var h = document.getElementById("heading");
        h.style.color = "red";
        setInterval(changeText,20);
        flag = true;
    }

}
function changeText() {
    var h = document.getElementById("heading");
    h.style.transform = "rotate("+x+"deg)";
    x++;
}