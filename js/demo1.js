var x;
x = 10;
x = "xin chao cac ban";
x = 3.14;
var y = 20;
var z = x + y; // 23.14
x = "hello";
var k = x + y;
// hello + 10 -> hello10
// 10 + hello -> 10hello
// hello  + world -> helloworld
console.log(k);
var t = true;// false
for(var i=0;i<10;i++){
    console.log("i="+i);
}
var ar = [];
ar[0] = 1;
ar.push(10);
ar.push("hello");
ar.push("hello");
ar.push("hello");
ar.push("hello");
ar.push("hello");
ar.push("hello");
// duyet mang theo chi muc (index)
for(var i = 0;i<ar.length;i++){
    console.log(ar[i]);
}
// duyet mang theo kieu xet tung phan tu - foreach
ar.map(xyz=>{
    console.log(xyz);
});
var tk = tinhtong(5,3);
var tk2 = tinhtong("hello",10);

function tinhtong(a,b) {
    return a+b;
}

console.log(tk);
console.log(tk2);

function demo(){
    console.log("Hello everybody...");
    console.log("Hello everybody...");
    console.log("Hello everybody...");
}

//setTimeout(demo,3000);// demo: callback function

console.log("ABCXYZ...");
var n = 2;
var m = 0;
function checkPrime(x) {
 // kiem tra x co phai so nguyen to hay khong
    if(x < 2){
        return false;
    }else if(x == 2 || x == 3){
        return true;
    }else{
        for(var i=2;i<=x/2;i++){
            if(x%i==0){
                return false;
            }
        }
        return true;
    }
}
function nextPrime(x) {
    for(var i=x+1;true;i++){
        if(checkPrime(i)){
            return i;
        }
    }
}
function countdown() {
    var xyz = document.getElementById("head");
    xyz.innerText += " "+n;
    n = nextPrime(n);
    m++;
    if(m>=10){
        clearInterval(si);
    }
}
var si = setInterval(countdown,1000);

// viết chương trình cứ 2s in ra 1 số chẵn tăng dần theo thời gian
// in tối đa 10 số.