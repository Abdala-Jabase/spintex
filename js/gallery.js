function myFunction(imgs) {
    var closeBtn = document.getElementById("closebtn");
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
    closeBtn.style.display = "inline";
    document.querySelector('#expandedImg').scrollIntoView({
        behavior: 'smooth'
      });
  }