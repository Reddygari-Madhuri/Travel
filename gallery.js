
//from here gallery code starts
function imgK(pic,heading,description){
    document.getElementById("bigscreen").removeAttribute("style")
    document.getElementById("imgheading").innerHTML=heading;
    document.getElementById("imgparagraph").innerHTML=description;
    bigscreen.style.display="flex"
    fullImg.src=pic;
}
function imgV(){
    document.getElementById("bigscreen").setAttribute("style","display:none")
    console.log("calling")
}