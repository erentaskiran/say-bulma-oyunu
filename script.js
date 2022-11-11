
function tahminoyunu(){
let useranswer=document.getElementById("input").value;
let hak=useranswer;
let maxsayi=document.getElementById("maxsayi").value;
let tahmin;
let rnd=0;

rnd=Math.floor( Math.random()*maxsayi);

    tahmin=document.getElementById("giris").value;
    while(hak>0){
    
    
    
    hak--;
    if (tahmin>rnd) {
        
        return document.getElementById("kucukbuyuk").innerHTML=2;
    }
    else if(tahmin==rnd){
        
        return document.getElementById("sonuc").innerHTML=("Tebrikler doğru bildiniz "+(useranswer-hak)+" hak kullandınız"+"<br>"+"Puanınız = "+ puanhsp(hak));
        
        
    }
    else if (tahmin<rnd) {
        
        return document.getElementById("kucukbuyuk").innerHTML=1;
        
    }
    
    if(hak==0){
        
        return document.getElementById("sonuc").innerHTML="Bulamadınız.Sayı "+rnd+" idi"+"Puanınız = "+0;
        
    }
    
}

}
function puanhsp(hakkı){
    let asd=hakkı;
    let hsp=(100-(((useranswer-1)-asd)*(100/useranswer)) );
    return hsp;
}

