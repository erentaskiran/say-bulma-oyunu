let tahmin;
let rnd
let hak;
let enyuksek=0,endusuk=0;
let degismeyenhak;
function maxvalue(){
    enyuksek=document.getElementById("maxvalue").value;
}
function minvalue(){
    endusuk=document.getElementById("minvalue").value;
}
function hakekle(){
    hak=document.getElementById("asd").value;
    degismeyenhak=hak;
}
function random(){
     rnd=Math.floor( Math.random()*enyuksek);
    while(rnd<endusuk){
        rnd=Math.floor( Math.random()*enyuksek);
    }
}
function tahminoyunu(){
    random();
   tahmin=document.getElementById("giris").value; 
    hak--;
    if(hak==0){
        return document.getElementById("sonuc").innerHTML=("Bulamadınız.Sayı "+rnd+" idi");
    }
    if (tahmin>rnd) {
        return document.getElementById("sonuc").innerHTML=("düşür");
    }
    else if(tahmin==rnd){
        return document.getElementById("sonuc").innerHTML=("Tebrikler doğru bildiniz "),document.getElementById("puanlar").innerHTML=(puanhsp()+" puan aldınız");
    }
    else if (tahmin<rnd) {
        return document.getElementById("sonuc").innerHTML=("yükselt");       
    }
}
function puanhsp(){
   
   let a= 100-((degismeyenhak-hak-1)*(100/degismeyenhak));
   return a;
}