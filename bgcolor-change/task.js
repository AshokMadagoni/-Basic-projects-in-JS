let input=document.getElementById("input")
function colorchange(a){
    if(a.key==="Enter"){
        document.body.style.backgroundColor=input.value
    }
    else{
        document.body.style.backgroundColor="white"
    }

}