// kode iklan di tengah
document.addEventListener("DOMContentLoaded", function () {

  var adSource = document.getElementById("ad-middle-source");
  if (!adSource) return;

  var postBody = document.querySelector(".article-post");
  if (!postBody) return;

  var paragraphs = postBody.getElementsByTagName("p");

  if (paragraphs.length > 3) {

    var middleIndex = Math.floor(paragraphs.length / 2);

    var adClone = adSource.cloneNode(true);
    adClone.style.display = "block";
    adClone.id = "";

    paragraphs[middleIndex].insertAdjacentElement(
      "afterend",
      adClone
    );

  }

});