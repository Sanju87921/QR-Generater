function GenerateQRCode() {
    let website = document.getElementById("website").value;

    if (website.trim() === "") {
        alert("Please enter a valid URL");
        return;
    }

    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = ""; // Clear old QR

    // Generate new QR
    new QRCode(qrcodeContainer, {
        text: website,
        width: 180,
        height: 180,
    });

    document.getElementById("qrcode-wrapper").style.display = "block";
    document.getElementById("downloadBtn").style.display = "block";
}

function downloadQR() {
    let qrImg = document.querySelector("#qrcode img");

    if (!qrImg) {
        alert("Generate QR first!");
        return;
    }

    let link = document.createElement("a");
    link.href = qrImg.src;
    link.download = "qr_code.png";
    link.click();
}
