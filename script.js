function toggleManual() {
  const ukuran = document.getElementById("ukuran").value;
  document
    .getElementById("manualBox")
    .classList.toggle("hidden", ukuran !== "manual");
}

function hitungTotal() {
  const hargaDasar = parseInt(document.getElementById("jenis").value);
  const jumlah = parseInt(document.getElementById("jumlah").value);
  const ukuran = document.getElementById("ukuran").value;
  const ukuranManual = document.getElementById("ukuranManual").value || "";
  const pembayaran = document.getElementById("pembayaran").value;

  let tambahan = 0;
  let ukuranTampil = ukuran;

  if (ukuran === "manual") {
    ukuranTampil = ukuranManual;
    const jumlahX = (ukuranManual.match(/X/g) || []).length;
    if (jumlahX > 1) {
      tambahan = (jumlahX - 1) * 5000;
    }
  }

  const hargaFinal = hargaDasar + tambahan;
  const total = hargaFinal * jumlah;

  document.getElementById("ringkasan").innerText =
    `Ukuran: ${ukuranTampil}\nHarga: Rp ${hargaFinal.toLocaleString()} x ${jumlah}`;

  document.getElementById("total").innerText =
    "Total: Rp " + total.toLocaleString();

  document.getElementById("paymentInfo").innerText =
    pembayaran === "DANA"
      ? "Pembayaran DANA: 0821-6235-0017 (I Putu Sandhika Desta Wardahana) Lampirkan bukti pembayaran (via wa)"
      : "Pembayaran COD (Bayar di tempat)";
}

function kirimWA() {
  const nama = document.getElementById("nama").value;
  const alamat = document.getElementById("alamat").value;
  const ringkasan = document.getElementById("ringkasan").innerText;
  const total = document.getElementById("total").innerText;
  const pembayaran = document.getElementById("pembayaran").value;

  if (!nama || !alamat) {
    alert("Nama dan alamat wajib diisi!");
    return;
  }

  const pesan =
    `PESANAN BAJU\n\n` +
    `Nama: ${nama}\n` +
    `Alamat: ${alamat}\n` +
    `${ringkasan}\n` +
    `${total}\n` +
    `Pembayaran: ${pembayaran}`;

  window.open(
    "https://wa.me/6282162350017?text=" + encodeURIComponent(pesan),
    "_blank",
  );
}

hitungTotal();
