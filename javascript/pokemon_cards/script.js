var main=document.getElementById("main");
var arr=["https://i.pinimg.com/enabled/236x/3d/38/27/3d38278f22f8b833ae5b9e0cb48c941b.jpg",
    "https://i.pinimg.com/236x/07/17/86/071786b3016408f2b1f6f5a0ced1dd0e.jpg",
    "https://i.pinimg.com/236x/2b/7a/20/2b7a20d6b3d7e5688c6034e0401ead59.jpg",
    "https://i.pinimg.com/enabled/236x/d8/ef/9e/d8ef9e6e7d40d606943a15c1736a1c1c.jpg", 
    "https://i.pinimg.com/236x/a5/d0/87/a5d087d790be9252bed508e57d245cf5.jpg",
    "https://i.pinimg.com/236x/b8/85/42/b88542a1ce5bd5c73279da6ee190c41d.jpg"];
var s="";
for(var i=1;i<=52;i++){
    var r=Math.floor(Math.random()*arr.length);
    s += `<div class="card"><img src=${arr[r]}></div>`;
}
main.innerHTML=s;