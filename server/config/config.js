// =====================
// Puerto
// =====================
process.env.PORT = process.env.PORT || 3000;

// =====================
// Entorno
// =====================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// =====================
// Base de Datos
// =====================
let urlDB;

// if(process.env.NODE_ENV === 'dev'){
//     urlDB = 'mongodb://localhost:27017/cafe'
// }else{
    urlDB = 'mongodb+srv://oldanirenzo:T5Ck0xk06ymU6QBv@cafedb.rjhcg.mongodb.net/Cafe'
// }

process.env.URLDB = urlDB;
