let p=document.querySelector("p")
function validate(a){
    p.textContent=p.textContent==0?a:p.textContent+a;
}
function result(){
    p.textContent=eval(p.textContent)
}
function vanish(){
    p.textContent=0
}