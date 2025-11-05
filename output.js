// menampilkan hello world
console.log("hello world");;

// Membuat let kosntanta
const namaAkuh = "Faris Iskandar Hafidz"; 
// value pada namaAkuh tidak akan berlet. 
// namaAkuh = "Enggi Aulia Yudhiex";
console.log(namaAkuh);

// Membuat let biasa 

let letSatu = "Ini contoh saja"; 
let letDua = "Contoh kedua"; 
let letTiga = "Versi ketiga dari let"; 

console.log(letSatu);
console.log(letDua);
console.log(letTiga);


// function 
function kali(a, b){
    hasilKali = a * b;
    console.log("Hasil dari ini = " + hasilKali);
}

kali(2, 3);
kali(3, 9);

// return 
function tambah(c, d){
    return c + d;
};

let meme = tambah(4, 9)
console.log(meme);

// if condition 

let umur = 17; 

if (umur > 18) { 
    console.log("Umur anda sudah dewasa");;;
} else {
    console.log("Masih bocil yeee");;;
}