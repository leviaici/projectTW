class Produs{

    constructor({id, nume, descriere, pret, distanta_focala, tip_produs, subiecte, categorie, locatie, family_friendly, imagine, data_creare}={}) {

        for(let prop in arguments[0]){
            this[prop]=arguments[0][prop]
        }

    }

}