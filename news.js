

let inbox1=document.getElementById("in1");
let inbox2=document.getElementById("in2");
let inbox3=document.getElementById("in3");
let inbox4=document.getElementById("in4");
let inbox5=document.getElementById("in5");
let inbox6=document.getElementById("in6");
let inbox7=document.getElementById("in7");

let btn=document.getElementById("bt");
let box=document.getElementById("bx");
let newele=document.createElement("div");
newele.setAttribute("class","cls1");
newele.setAttribute("id","id1");
newele.innerHTML=`
<div id="my1" class="myclass">news 1</div>
<br>
<div id="my2" class="myclass">news 2</div>
<br>
<div id="my3" class="myclass">news 3</div>
<br>
<div id="my4" class="myclass">news 4</div>
<br>
<div id="my5" class="myclass">news 5</div>
<br>
<div id="my6" class="myclass">news 6</div>
<br>
<div id="my7" class="myclass">news 7</div>`;

let i=true;

btn.addEventListener("click",function(){
    if(i){
    box.appendChild(newele);
    i=false;
    }
    else{
        box.removeChild(newele);
        i=true;
    }

//here we starts from
    let cn=document.getElementsByClassName("myclass");

  Array.from(cn).forEach((element,index) => {
        // console.log("here is : ",element,index);


        element.addEventListener('click',function(){

            fetch('https://newsapi.org/v2/everything?q=Apple&from=2022-07-17&sortBy=popularity&apiKey=e421034d0fd24e56a8ca95916e8e85aa')
        .then(response => response.json())
        .then((json) =>{
            let ak=json.articles;
            console.log(json.articles);

            // console.log(ak[index]["author"],"and index is : ",index);

            inbox1.innerHTML="Author's name : "+ak[index]["author"];
            inbox2.innerHTML="Title : "+ak[index]["title"];
            inbox3.innerHTML="Description : "+ak[index]["description"];
            inbox4.innerHTML="source : "+ak[index]["source"];
            inbox5.innerHTML="Published on : "+ak[index]["publishedAt"];
            inbox6.innerHTML="URL : "+ak[index]["url"];
            inbox7.innerHTML="Content :"+ak[index]["content"];
        })



    });

//here we ends

});

 
 })



