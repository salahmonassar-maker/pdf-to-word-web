function uploadFile() {
    const fileInput = document.getElementById("pdfFile");
    const status = document.getElementById("status");

    if (!fileInput.files.length) {
        status.innerHTML = "❌ اختر ملف PDF";
        return;
    }

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    status.innerHTML = "⏳ جاري التحويل...";

    fetch("https://pdf-to-word-backend-1-3pf9.onrender.com /convert", {
        method: "POST",
        body: formData
    })
    .then(res => res.blob())
    .then(blob => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "output.docx";
        a.click();
        status.innerHTML = "✅ تم التحويل";
    })
    .catch(() => {
        status.innerHTML = "❌ خطأ في التحويل";
    });
}
