document.addEventListener("DOMContentLoaded", function () {
  hitungTotal();
});

function hitungTotal() {
  const jenisEl = document.getElementById("jenis");
  const jumlahEl = document.getElementById("jumlah");
  const ukuranEl = document.getElementById("ukuran");

  if (!jenisEl || !jumlahEl || !ukuranEl) return;

  let harga = parseInt(jenisEl.value) || 0;
  let jumlah = parseInt(jumlahEl.value) || 1;
  let ukuran = ukuranEl.value || "";

  // Tambahan ukuran custom
  if (ukuran === "Lain-lain (+5K)") {
    harga += 5000;
  }

  let total = harga * jumlah;

  document.getElementById("totalHarga").innerText =
    "Total: Rp " + total.toLocaleString("id-ID");

  document.getElementById("ringkasan").innerText =
    `Harga satuan: Rp ${harga.toLocaleString("id-ID")} x ${jumlah}`;
}

function kirimWA() {
  const nama = document.getElementById("nama").value.trim();
  const alamat = document.getElementById("alamat").value.trim();
  const jenis = document.getElementById("jenis").selectedOptions[0].text;
  const ukuran = document.getElementById("ukuran").value;
  const jumlah = document.getElementById("jumlah").value;
  const total = document.getElementById("totalHarga").innerText;

  if (!nama || !alamat) {
    alert("Nama dan alamat wajib diisi!");
    return;
  }

  let pesan =
    `PESANAN BAJU BALI BONEX\n\n` +
    `Nama: ${nama}\n` +
    `Alamat: ${alamat}\n` +
    `Jenis: ${jenis}\n` +
    `Ukuran: ${ukuran}\n` +
    `Jumlah: ${jumlah}\n` +
    `${total}`;

  const url = "https://wa.me/6282162350017?text=" + encodeURIComponent(pesan);

  window.open(url, "_blank");
}
