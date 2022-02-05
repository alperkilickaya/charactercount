let textarea = document.querySelector("textarea");
let current = document.getElementById("current");
let regexp = /[ğüşıİöç]/gi;
let ikazz = document.getElementById("alper");

function sayac() {
  let yazi = textarea.value;
  let boslukalinmis = yazi.replace(/ +/g, "");
  let turkcetekrarsayisi = (yazi.match(regexp) || []).length;
  let uzunluk = boslukalinmis.length;
  window.toplam = uzunluk + turkcetekrarsayisi;

  current.innerText = toplam;

  if (toplam <= 155) {
    ikazz.classList.add("ikaz");
    //textarea.maxLength = 156;
  } else {
    ikazz.classList.remove("ikaz");
  }
}

function gonder() {
  let mesaj_sayi = Math.ceil(toplam / 155);

  Swal.fire({
    title: "Uyarı!",
    html: "Toplam " + "<b>" + mesaj_sayi + " MESAJ" + "</b>" + " gönderilecek?",
    icon: "warning",
    confirmButtonText: "Tamam",
  });
}
