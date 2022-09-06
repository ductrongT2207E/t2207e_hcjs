var obj = {
  name:"Nam",
  age: 18,
  tel: "+8498876626262",
  girlFriends:['Nguyễn Vân Anh','Lê Ngọc Anh'],
  eat: function () {
      console.log(this.name+" đang ăn mì tôm...");
  }
};
console.log(obj.tel);
obj.eat();
obj.name = "Huy";
obj.eat();
var obj2 = {
    name:"Nam",
    age: 18,
    tel: "+8498876626262",
    girlFriends:['Nguyễn Vân Anh','Lê Ngọc Anh'],
    eat: function () {
        console.log(this.name+" đang ăn mì tôm...");
    }
};

var a = document.getElementById("abc");
console.log(a.innerText);
var x = 15;
function changeText(){
  //  a.innerText = "Xin chao cac ban";
  //   a.innerHTML = x+"<p> Xin chao cac ban</p>";
    a.style.fontSize = x+"px";
    a.style.color = "pink";
    x++;
    a.classList.add("classnaodo");
    a.style.transform = "rotate("+x+"deg)";
}
setInterval(changeText,30);