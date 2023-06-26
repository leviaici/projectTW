/**
 * @param {Object} obiectProdus - obiectul de tip Produs
 * @param {number} id - id-ul produsului
 * @param {string} nume - numele produsului
 * @param {string} descriere - descrierea produsului
 * @param {number} pret - pretul produsului
 * @param {number} distanta_focala - distanta focala cu care a fost realizata imaginea
 * @param {string} tip_produs - tipul produsului
 * @param {number} subiecte - numarul de subiecte
 * @param {string} categorie - categoria produsului
 * @param {string[]} locatie - locatia in care a fost realizata imaginea (oras + tara)
 * @param {boolean} family_friendly - indica daca produsul este family friendly sau nu
 * @param {string} imagine - adresa imaginii
 * @param {Date} data_creare - data crearii produsului
 */

class Produs{
    constructor({id, nume, descriere, pret, distanta_focala, tip_produs, subiecte, categorie, locatie, family_friendly, imagine, data_creare}={}) {
        for(let prop in arguments[0]){
            this[prop]=arguments[0][prop]
        }
    }
}