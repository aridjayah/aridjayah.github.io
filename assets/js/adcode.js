// kode iklan di tengah
document.addEventListener("DOMContentLoaded", function () {

  var adSource = document.getElementById("ad-middle-source");
  if (!adSource) return;

  var postBody = document.querySelector(".article-post");
  if (!postBody) return;

  var paragraphs = postBody.querySelectorAll("p");

  // Jika tidak ada paragraf, stop
  if (paragraphs.length === 0) return;

  // Hitung posisi tengah
  var middleIndex = Math.floor(paragraphs.length / 2);

  // Clone iklan
  var adClone = adSource.cloneNode(true);

  adClone.style.display = "block";
  adClone.removeAttribute("id");

  // Tambahkan class tambahan (opsional)
  adClone.classList.add("ad-middle-inserted");

  // Masukkan setelah paragraf tengah
  paragraphs[middleIndex].after(adClone);

});