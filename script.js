const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const ad = document.getElementById("ad").value;
    const soyad = document.getElementById("soyad").value;
    const telefon = document.getElementById("telefon").value;
    const email = document.getElementById("email").value;
    const dogum = document.getElementById("dogum").value;
    const uyruk = document.getElementById("uyruklar").value;
    const boy = document.getElementById("boylar").value;
    const instagram = document.getElementById("instagram").value;
    const tiktok = document.getElementById("tiktok").value;



    // ✅ GÜVENLİ CİNSİYET
    const seciliCinsiyet = document.querySelector("input[name='cinsiyet']:checked");
    const cinsiyet = seciliCinsiyet ? seciliCinsiyet.value : "Seçilmedi";

    // FOTOĞRAFLAR
    const foto1 = document.getElementById("foto1").files[0];
    const foto2 = document.getElementById("foto2").files[0];
    const foto3 = document.getElementById("foto3").files[0] || null;

    const basvuru = {
        ad,
        soyad,
        telefon,
        email,
        dogum,
        uyruk,
        boy: boy ? boy + " cm" : "Yok",
        cinsiyet,
        foto1: foto1 ? URL.createObjectURL(foto1) : "Yok",
        foto2: foto2 ? URL.createObjectURL(foto2) : "Yok",
        foto3: foto3 ? URL.createObjectURL(foto3) : "Yok",
        instagram: instagram ? instagram.name : " ",
        tiktok: tiktok ? tiktok.name : " ",
        tarih: new Date().toLocaleString("tr-TR")
    };

    console.log("BAŞVURULAR:", basvuru);

    alert("Başvurunuz alındı! Teşekkürler.");

    setTimeout(() => {
        form.reset();
    }, 3000);
});







