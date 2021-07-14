
    const block = document.getElementById("block1");
    window.addEventListener("scroll",function()
    {
        let offset = window.pageYOffset;
      block.style.backgroundPositionY = offset *0.7 + "px";
    })

