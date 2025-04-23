const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrtext");
const spinner = document.getElementById("spinner");
const downloadBtn = document.getElementById("downloadBtn");

function generateQR() {
  const input = qrText.value.trim();
  if (!input) {
    qrText.classList.add("shake");
    setTimeout(() => qrText.classList.remove("shake"), 500);
    return;
  }

  qrImage.style.display = "none";
  downloadBtn.style.display = "none";
  qrImage.classList.remove("fade-in");
  spinner.style.display = "block";
  imgBox.classList.add("show-img");

  const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(input)}`;
  qrImage.src = qrURL;

  qrImage.onload = () => {
    spinner.style.display = "none";
    qrImage.style.display = "block";
    qrImage.classList.add("fade-in");
    downloadBtn.style.display = "inline-block";

    downloadBtn.onclick = function () {
      const a = document.createElement("a");
      a.href = qrImage.src;
      a.download = "qr-code.png";
      a.click();
    };
  };
}



