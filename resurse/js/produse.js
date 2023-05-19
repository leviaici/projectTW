window.addEventListener("load", function() {
    document.getElementById("inp-pret").onchange=function() {
        document.getElementById("infoRange").innerHTML=`(${this.value})`;
    }
    
    document.getElementById("filtrare").onclick=function() {
        var counter=0;
        let val_nume=document.getElementById("inp-nume").value.toLowerCase();

        let val_cheie=document.getElementById("inp-cheie").value.toLowerCase();
        
        let radioButtons=document.getElementsByName("gr_rad");
        let val_subiecte;
        
        for(let r of radioButtons) {
            if(r.checked) {
                val_subiecte=r.value;
                break;
            }
        }
        
        var sub_a, sub_b;
        if(val_subiecte!="toate") {
            [sub_a, sub_b]=val_subiecte.split(":");
            sub_a=parseInt(sub_a);
            sub_b=parseInt(sub_b);
        }
        
        let val_pret=document.getElementById("inp-pret").value;

        let val_categorie=document.getElementById("inp-categorie").value;

        var val_categoriem = document.getElementById("inp-categoriem");
        var selectedOptions = Array.from(val_categoriem.selectedOptions);
        var selectedValuesCategoriem = selectedOptions.map(option => option.value);

        let val_sfw=document.getElementById("inp-sfw").value;

        let val_noutati=document.getElementById("noutati").checked;
        
        var produse=document.getElementsByClassName("produsfinal");
        for(let prod of produse) {
            prod.style.display="none";
            let nume=prod.getElementsByClassName("val-nume")[0].innerHTML.toLowerCase();
            let cond1=(nume.startsWith(val_nume));

            let subiecte=parseInt(prod.getElementsByClassName("val-subiecte")[0].innerHTML.toLowerCase());
            let cond2=(val_subiecte=="toate" || sub_a<=subiecte && sub_b>subiecte);

            let pret=parseFloat(prod.getElementsByClassName("val-pret")[0].innerHTML.toLowerCase());
            let cond3=(pret>=val_pret);

            let categorie=prod.getElementsByClassName("val-categorie")[0].innerHTML;
            let cond4=(val_categorie=="toate" || val_categorie==categorie || val_categorie=="");

            let sfw=prod.getElementsByClassName("val-sfw")[0].innerHTML;

            if(val_sfw == "da")
                val_sfw="true";
            else if(val_sfw=="nu")
                val_sfw="false";

            let cond5=(val_sfw=="toate" || val_sfw==sfw);

            let categoriem=prod.getElementsByClassName("val-categorie")[0].innerHTML;
            let cond6=false;
            if(selectedValuesCategoriem[0]=="toate")
                cond6=true;
            else {
                for(var i=0;i<selectedValuesCategoriem.length;i++) {
                    if(selectedValuesCategoriem[i]==categoriem) {
                        cond6=true;
                        break;
                    }
                }
            }

            let descriere=prod.getElementsByClassName("val-descriere")[0].innerHTML.toLowerCase();
            let cond7=(descriere.includes(val_cheie) || val_cheie=="");

            let dataCreare=window.prodDataCreareArray;
            var noutate=new Date();
            noutate.setDate(noutate.getDate()-31);
            var thisDate=new Date(dataCreare[counter]);
            let cond8=(thisDate >= noutate || val_noutati==false);
            
            if(cond1 && cond2 && cond3 && cond4 && cond5 && cond6 && cond7 && cond8) {
                prod.style.display="block";
            }
            counter++;
        }
    }

    document.getElementById("resetare").onclick= function(){
        document.getElementById("inp-nume").value="";
        document.getElementById("inp-cheie").value="";
        document.getElementById("inp-pret").value=document.getElementById("inp-pret").min;
        document.getElementById("inp-categorie").value="toate";
        document.getElementById("inp-categoriem").value="toate";
        document.getElementById("inp-sfw").value="toate";
        document.getElementById("i_rad4").checked=true;
        document.getElementById("infoRange").innerHTML="(0)";
        document.getElementById("noutati").checked=false;
        var produse=document.getElementsByClassName("produsfinal");
        for (let prod of produse)
            prod.style.display="block";
    }
    
    function sortare(semn){
        var produse=document.getElementsByClassName("produsfinal");
        var v_produse= Array.from(produse);
        v_produse.sort(function (a,b){
            let nume_a=a.getElementsByClassName("val-nume")[0].innerHTML;
            let nume_b=b.getElementsByClassName("val-nume")[0].innerHTML;
            if(nume_a==nume_b){
                let raport_a=parseFloat(a.getElementsByClassName("val-distantafocala")[0].innerHTML)/parseFloat(a.getElementsByClassName("val-pret")[0].innerHTML);
                let raport_b=parseFloat(b.getElementsByClassName("val-distantafocala")[0].innerHTML)/parseFloat(b.getElementsByClassName("val-pret")[0].innerHTML);
                return semn*(raport_a-raport_b);
            }
            return semn*nume_a.localeCompare(nume_b);
        });
        for(let prod of v_produse){
            prod.parentElement.appendChild(prod);
        }
    }
    document.getElementById("sortCrescNume").onclick=function(){
        sortare(1);
    }
    document.getElementById("sortDescrescNume").onclick=function(){
        sortare(-1);
    }

    this.document.getElementById("sumaproduselor").onclick=function(){
        if(document.getElementById("info-suma"))
            return;
        var produse=document.getElementsByClassName("produsfinal");
        let suma=0;
        for (let prod of produse){
            if(prod.style.display!="none") {
                let pret=parseFloat(prod.getElementsByClassName("val-pret")[0].innerHTML);
                suma+=pret;
            }
        }
        let p=document.createElement("p");
        p.innerHTML="Suma produselor afisate este de " + suma + "$.";
        p.id="info-suma";
        ps=document.getElementById("sumaproduselor");
        container = ps.parentNode;
        frate=ps.nextElementSibling
        container.insertBefore(p, frate);
        setTimeout(function(){
            let info=document.getElementById("info-suma");
            if(info)
                info.remove();
            }, 2000);
    }

    document.getElementById("btn-inp-categoriem").onclick=function() {
        var categoriem = document.getElementById("inp-categoriem");
        var butoncategoriem=document.getElementById("btn-inp-categoriem");
        if (categoriem.style.display === "none") {
            categoriem.style.display = "block";
            butoncategoriem.innerHTML="Ascunde";
        } else {
            categoriem.style.display = "none";
            butoncategoriem.innerHTML="Arata";
        }
      }
});