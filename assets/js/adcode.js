// kode iklan di tengah
document.addEventListener("DOMContentLoaded", function () {
    var adCode = `
  <div class="ads-middle" style="margin:25px 0; text-align:center;">
    {% include ad-middle.html %}
  </div>
  `;

    var postBody = document.querySelector(".article-post");
    if (!postBody) return;
    var paragraphs = postBody.getElementsByTagName("p");
    if (paragraphs.length > 3) {
        var middleIndex = Math.floor(paragraphs.length / 2);
        paragraphs[middleIndex].insertAdjacentHTML("afterend", adCode);
    }
});