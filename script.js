

var textarea = document.querySelector('textarea');
var current = document.getElementById('current');
var regexp = /[ğüşıİöç]/gi;


function sayac() {

    var yazi = textarea.value;
    var boslukalinmis = yazi.replace(/ +/g, "")
    var turkcetekrarsayisi =  (yazi.match(regexp) || []).length;
    var uzunluk = boslukalinmis.length;
    var toplam = uzunluk + turkcetekrarsayisi;

    current.innerText = toplam;
    
    var ikazz = document.getElementById("alper");

    if(toplam <= 155){
        ikazz.classList.add("ikaz");
        //textarea.maxLength = 156;
    }else{
        ikazz.classList.remove("ikaz");
    }
}

function gonder(){
    var yazi = textarea.value;
    var boslukalinmis = yazi.replace(/ +/g, "")
    var turkcetekrarsayisi =  (yazi.match(regexp) || []).length;
    var uzunluk = boslukalinmis.length;
    var toplam = uzunluk + turkcetekrarsayisi;
    var mesaj_sayi = Math.ceil(toplam/155);
    
        Swal.fire({
            title: 'Uyarı!',
            html: 'Toplam ' + '<b>' + mesaj_sayi + ' MESAJ' + '</b>' + ' gönderilecek?',
            icon: 'warning',
            confirmButtonText: 'Tamam'
        });
}