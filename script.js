function hitungTotal() {
  const jenis = document.getElementById("jenis");
  const jumlah = document.getElementById("jumlah");
  const ukuran = document.getElementById("ukuran").value;
  const ukuranManual = document.getElementById("ukuranManual").value.trim();
  const pembayaran = document.getElementById("pembayaran").value;

  let harga = parseInt(jenis.value);
  let qty = parseInt(jumlah.value);

  if (ukuranManual !== "") {
    harga += 5000;
  }

  let total = harga * qty;

  document.getElementById("totalHarga").innerText =
    "Total: Rp " + total.toLocaleString("id-ID");

  document.getElementById("ringkasan").innerText =
    `Ukuran: ${ukuranManual !== "" ? ukuranManual : ukuran}
Harga: Rp ${harga.toLocaleString()} x ${qty}
Pembayaran: ${pembayaran}`;

  const info = document.getElementById("paymentInfo");

  if (pembayaran === "Transfer BCA") {
    info.innerText = "Transfer ke BCA (VIA WA)";
  } else if (pembayaran === "Transfer BRI") {
    info.innerText = "Transfer ke BRI (VIA WA)";
  } else if (pembayaran === "Dana") {
    info.innerText = "Dana: 0821-6235-0017";
  } else {
    info.innerText = "Pembayaran dilakukan saat barang diterima (COD)";
  }
}

function kirimWA() {
  const nama = document.getElementById("nama").value;
  const alamat = document.getElementById("alamat").value;

  if (!nama || !alamat) {
    alert("Nama dan alamat wajib diisi");
    return;
  }

  const jenis = document.getElementById("jenis").selectedOptions[0].text;
  const ukuran = document.getElementById("ukuran").value;
  const ukuranManual = document.getElementById("ukuranManual").value.trim();
  const jumlah = document.getElementById("jumlah").value;
  const pembayaran = document.getElementById("pembayaran").value;
  const total = document.getElementById("totalHarga").innerText;

  const ukuranFinal = ukuranManual !== "" ? ukuranManual : ukuran;

  const pesan = `PESANAN BAJU
Nama: ${nama}
Alamat: ${alamat}
Jenis: ${jenis}
Ukuran: ${ukuranFinal}
Jumlah: ${jumlah}
Pembayaran: ${pembayaran}
${total}`;

  window.open(
    "https://wa.me/6282162350017?text=" + encodeURIComponent(pesan),
    "_blank",
  );
}

hitungTotal();
