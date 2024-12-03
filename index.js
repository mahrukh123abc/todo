var input=document.getElementById("input");
var btn=document.getElementById("btn");
var ul=document.getElementById("ul");
 var ul2=document.getElementById("ul2");
btn.addEventListener("click",function(){
    var dataget=input.value;
    
    var li=document.createElement("li")

var btndelete=document.createElement("button");

var textdelete=document.createTextNode("delete");
btndelete.append(textdelete);

var btndone=document.createElement("button");

var textdone=document.createTextNode("done");
btndone.append(textdone);

var textnode=document.createTextNode(dataget);
li.append(textnode);
ul.append(li);
ul.append(btndelete);
ul.append(btndone);
input.value=null;

btndelete.addEventListener("click",function(){
    li.remove();
    btndelete.remove();
    btndone.remove();

});
btndone.addEventListener("click",function(){
var li2=document.createElement("li");
li2.textContent = dataget;

ul2.append(li2)
});
});
btn.addEventListener("click",function(){
    ingredients.textContent=dataget.value
});