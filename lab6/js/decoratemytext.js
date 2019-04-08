
function hello() {
    alert("hello world!");
}

function myFunc() {
    var size=parseInt(document.getElementById("txtarea").style.fontSize);
    size+=2;
    document.getElementById("txtarea").style.fontSize= size + "pt";
}

function myCheck(){

    var mycheck=document.getElementById("chk").checked;
    var x=document.getElementById("txtarea");
    var body=document.getElementById("body");

    if (mycheck){
        x.style.fontWeight="bold";
        x.style.color="green";
        x.style.textDecoration="underline";
        body.style.backgroundImage="url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    }else{
        x.style.fontWeight="normal";
        x.style.color="black";
        x.style.textDecoration="none";
        body.style.backgroundImage="none";
    }
}

function myTimer() {
    var timer=null;

    if (timer==null){
        setInterval(myFunc,500);
    }else{
        clearInterval(timer);
        timer=null;
    }
}

function myIgpayAtinlay(){
    var txtStr = document.getElementById("txtarea").value;
    var str = txtStr.trim().split(" ");
    var str_new = "";
    for(var i = 0; i<str.length; i++){
        str_new += translateIgpayAtinlay(str[i]) + " ";
    }
    document.getElementById("txtarea").value = str_new;
}

function translateIgpayAtinlay(str) {
    return str.replace(/\b(\w)(\w+)\b/g, function (a, b, c) {
        if (/[A-Z]/.test(b)) {
            c = c.replace(/^\w/, function (x) {
                return x.toUpperCase()
            });
        }
        return c + b.toLowerCase() + (/[aeiou]/i.test(b) ? 'way' : 'ay');
    });
}

function myMalkovitch() {
    var x=document.getElementById("txtarea");
    var arr=x.value.trim().split(" ");
    var result="";

    for(var i=0;i<arr.length;i++){
        if (arr[i].length>=5){
            result +="Malkovitch" + " ";
        }else result +=arr[i] + " ";
    }

    x.innerHTML=result;
}