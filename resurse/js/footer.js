window.addEventListener("load", function() {
    function afiseazaTema() {
        let val_tema=document.getElementById("flexSwitchCheckDefault").checked;
        const labelElement = document.querySelector('.form-check-label');
        labelElement.innerHTML = val_tema ? '<i class="fas fa-sun"></i> Schimba tema' : '<i class="fas fa-moon"></i> Schimba tema';
    }

    afiseazaTema();
    
    var banner = document.getElementById('disclaimer-banner');
    banner.classList.add('animating');
    setTimeout(function() {
      banner.classList.add('show');
    }, 2000); // Se așteaptă 2 secunde pentru a începe afișarea bannerului

    document.getElementById("flexSwitchCheckDefault").onchange=function() {
        afiseazaTema();
    }
});