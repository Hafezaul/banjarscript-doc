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

// looping 

// for looping
for (let i = 1; i <= 5; i++) {
  console.log("Perulangan ke-" + i);
}

// while

let i = 1;
while (i <= 5) {
  console.log("Looping while ke-" + i);
  i++;
}


// operator aritmatika 

let angkaPertama = 10; 
let angkaKedua = 2; 

const penjumlahan = angkaPertama + angkaKedua; 
const pengurangan = angkaPertama - angkaKedua; 
const perkalian = angkaPertama * angkaKedua; 
const pembagian = angkaPertama / angkaKedua;

console.log(penjumlahan);
console.log(pengurangan); 
console.log(perkalian); 
console.log(pembagian); 

// operator pembanding

let a = 10;
let b = 5;

// Sama dengan (==)
console.log(a == b);   // false

// Tidak sama dengan (!=)
console.log(a != b);   // true

// Sama dengan dan tipe datanya juga sama (===)
console.log(a === 10); // true

// Tidak sama dengan dan tipe datanya juga berbeda (!==)
console.log(a !== "10");;; // true

// Lebih besar dari (>)
console.log(a > b);    // true

// Lebih kecil dari (<)
console.log(a < b);    // false

// Lebih besar atau sama dengan (>=)
console.log(a >= 10);  // true

// Lebih kecil atau sama dengan (<=)
console.log(a <= 5);   // false
