var open = false;
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    if(open === false){
        document.getElementById("the-navbar").style.width = "200px";
        document.getElementById("main").style.marginLeft = "75px";
        document.getElementById("poop").style.marginLeft = "125px";
        // document.getElementById("main").style.marginRight = "50px";
        document.getElementById("poop").style.transform = "rotate(180deg)";
        document.getElementById("homeinst").style.marginLeft = "110px";
        document.getElementById("simplytut").style.marginLeft = "110px";
        open = true;
    }else{
        closeNav();
        open = false;
    }


  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("the-navbar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("poop").style.marginLeft = "0";
    document.getElementById("homeinst").style.marginLeft = "0";
    document.getElementById("simplytut").style.marginLeft = "0";
    document.getElementById("poop").style.transform = "rotate(0deg)" 
  }