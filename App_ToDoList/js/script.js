// Buat array agenda (sesuai tutorial)
let Agenda = ['Bangun', 'Mandi', 'Sarapan'];

// Tampilkan data ke elemen ul id="daftar"
function showData() {
    let daftar = document.getElementById('daftar');
    daftar.innerHTML = "";
    for (var i = 0; i < Agenda.length; i++) {
        var linkHapus = '<a href="#" onclick="DelData(' + i + ')">✓ Cek</a>';
        daftar.innerHTML += '<li><span>' + Agenda[i] + '</span> ' + linkHapus + '</li>';
    }
}

// Menambahkan Agenda baru
function addData() {
    var input = document.getElementById('agenda');
    
    // Validasi sederhana agar tidak memasukkan agenda kosong
    if (input.value.trim() === "") {
        alert("Silakan masukkan nama kegiatan terlebih dahulu!");
        return;
    }

    // Memasukkan data ke array
    Agenda.push(input.value);

    // Kosongkan kembali kolom input setelah disimpan
    input.value = "";

    // Tampilkan data ulang
    showData();
}

// Menghapus atau menyelesaikan task agenda (DelData)
function DelData(id) {
    // Menghapus 1 elemen pada indeks array yang dipilih
    Agenda.splice(id, 1);
    
    // Tampilkan data ulang setelah dihapus
    showData();
}
