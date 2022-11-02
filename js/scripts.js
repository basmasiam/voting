window.onload=function(){
const form=document.querySelector("form");
form.onsubmit=function(event){
  event.preventDefault();
  let votingLinks=document.getElementById("above-18");
  votingLinks.setAttribute("class","hidden");
  let votingInfo=document.getElementById("below-18");
  votingInfo.setAttribute("class","hidden");

  let age=parseInt(document.querySelector("input#age").value)
if (age>17) {

  votingLinks.removeAttribute("class");
  
} else {
votingInfo.removeAttribute("class");
}
};
};