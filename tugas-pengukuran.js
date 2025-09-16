//JS untuk Kalkulator/Operasi Matematika Sederhana
const tambah = (a, b) => a + b;
const kurang = (a, b) => a - b;
const kali = (a, b) => a * b;
const bagi = (a, b) => a / b;

const hitung = () => {
    let a = parseFloat(document.getElementById("angka1").value);
    let b = parseFloat(document.getElementById("angka2").value);
    let operasi = document.getElementById('operator').value;
    let hasilOperasi;

    if (operasi === '+') hasilOperasi = tambah(a,b);
    else if (operasi === '-') hasilOperasi = kurang(a,b);
    else if (operasi === '*') hasilOperasi = kali(a,b);
    else if (operasi === '/') hasilOperasi = bagi(a,b);
    else hasilOperasi = 'Operator tidak vallid';

    document.getElementById('hasilOp').textContent = `Hasil : ${hasilOperasi}`;
}

//JS untuk Body Mass Index
const indeks = (berat, tinggi) => berat /((tinggi/100) * (tinggi/100));

const hitungBMI = () => {
    let berat = parseFloat(document.getElementById('berat').value);
    let tinggi = parseFloat(document.getElementById('tinggi').value);
    let nilaiBMI = indeks(berat, tinggi);
    let hasilBMI;

    if (nilaiBMI <= 18.5) hasilBMI = 'Berat badan kurang (underweight)';
    else if (nilaiBMI >= 18.5  && nilaiBMI <= 24.9) hasilBMI = 'Normal/ideal';
    else if (nilaiBMI >= 25 && nilaiBMI <= 29.9) hasilBMI = 'Kelebihan berat badan (overweight)';
    else if (nilaiBMI >= 30) hasilBMI = 'Obesitas';
    else hasilBMI = "Masukkan berat dan tinggi badan!";

    document.getElementById('hasilbmi').textContent = `Hasil : ${hasilBMI}`;
}

//JS untuk Konversi Suhu
const fahrenheit = (suhu) => 9/5 * suhu + 32;
const kelvin = (suhu) => suhu + 273;
const reamur = (suhu) => 4/5 * suhu;

const konversi = () => {
    let suhu = parseFloat(document.getElementById('celcius').value);
    let kvrs = document.getElementById('jenisSuhu').value;
    let hasilSuhu;

    if (kvrs === 'f') hasilSuhu = fahrenheit(suhu);
    else if (kvrs === 'k') hasilSuhu = kelvin(suhu);
    else if (kvrs === 'r') hasilSuhu = reamur(suhu);
    else hasilSuhu = 'Operator tidak valid';
    
    document.getElementById('hasilSh').textContent = `Hasil : ${hasilSuhu}`;
}