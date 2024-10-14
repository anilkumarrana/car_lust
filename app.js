// 
// 
 
  
function show_location (){
    const click_button = document.querySelector(".find_location");

    if(click_button.style.display==="none"){
        click_button.style.display ="block"
    }
    else{
        click_button.style.display = "none"
    }
}    

function show_plan (){
    const plan = document.querySelector(".find_plan")
    if(plan.style.display==="none"){
        plan.style.display="block"
    }
    else{
        plan.style.display="none"
    }
}

function setTime(){
    let todayTTime = document.getElementById("time_set");

    let presentTime = new Date();
    let presentHour = presentTime.getHours();
     
    let presentMintus = presentTime.getMinutes();

    // presentHour = presentHour.toString().padStart(2, "0");
    // presentMintus = presentMintus.toString().padStart(2,"0");
    if(presentHour<10){
        presentHour= "0"+presentHour;
    }
    if(presentMintus<10){
        presentMintus = "0"+presentMintus;
    }
    let time = presentHour+ ":" + presentMintus;
    todayTTime.setAttribute("value",time);
     
}
setTime();
 
function timeSet(){
    let time = document.querySelector("#time_set2");

    let today = new Date();
    let Hour = today.getHours();
    let minutes = today.getMinutes();

    if(Hour<10){
        Hour= "0"+Hour;
    }
    if(minutes<10){
        minutes= "0" +minutes;
    }
    let settime = Hour+ ":" + minutes
    time.setAttribute("value",settime);
}
timeSet() 



function scrollLeft() {
    const container = document.querySelector('.selling-content');
    container.scrollBy({
      left: -300, // Adjust the scroll amount as needed
      behavior: 'smooth'
    });
  }
  
  function scrollRight() {
    const container = document.querySelector('.selling-content');
    container.scrollBy({
      left: 300, // Adjust the scroll amount as needed
      behavior: 'smooth'
    });
  }
  


// function demo(){
//  const search = document.getElementsByClassName(".search-box-banner-details-location3")
// .getElementById("click", ()=> {
//     console.log("hiii")
// })
// }
 

// function button(){
//     const try_ = document.querySelector(".hello")
//     .addEventListener(()=>{
//         console.log("hiii")
//     })

// }
function carts(){
    const details = document.getElementById("carlust_details");

    if(details.style.display==="none"){
        details.style.display="block"
    }
    else{
        details.style.display="none"
    }
}
function demo_faq(){
    const faq_drop = document.querySelector("#faq_demo")
    if(faq_drop.style.display==="none"){
        faq_drop.style.display="block"
    }else{
        faq_drop.style.display="none"
    }
}

function demo_faq2(){
    const faq_drop2 =document.querySelector("#faq_demo2")

    if(faq_drop2.style.display==="none"){
        faq_drop2.style.display="block"
    }else{
        faq_drop2.style.display="none"
    }
}

function demo_faq3(){
    const faq_drop3 = document.querySelector("#faq_demo3")

    if(faq_drop3.style.display==="none"){
        faq_drop3.style.display="block"
    }else{
        faq_drop3.style.display="none"
    }
}
function demo_faq4(){
    const faq_drop4 = document.querySelector("#faq_demo4")

    if(faq_drop4.style.display==="none"){
        faq_drop4.style.display="block"
    }else{
        faq_drop4.style.display="none"
    }
}
function demo_faq5(){
    const faq_drop5 = document.querySelector("#faq_demo5")

    if(faq_drop5.style.display==="none"){
        faq_drop5.style.display="block"
    }else{
        faq_drop5.style.display="none"
    }
}
function demo_faq6(){
    const faq_drop6 = document.querySelector("#faq_demo6")

    if(faq_drop6.style.display==="none"){
        faq_drop6.style.display="block"
    }else{
        faq_drop6.style.display="none"
    }
}