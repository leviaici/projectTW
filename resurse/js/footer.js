window.addEventListener("load", function() {
    function afiseazaTema() {
        let val_tema=document.getElementById("flexSwitchCheckDefault").checked;
        const labelElement = document.querySelector('.form-check-label');
        labelElement.innerHTML = val_tema ? '<i class="fas fa-sun"></i> Schimba tema' : '<i class="fas fa-moon"></i> Schimba tema';
    }

    afiseazaTema();
    
    document.getElementById("flexSwitchCheckDefault").onchange=function() {
        afiseazaTema();
    }
});