let rndsayi=0;
let tahmin=0;

function oyun(){
    alert("sayı tahmin oyununa hoş geldiniz");
    hak=prompt("Kaç hakkınız olsun");
    max=prompt("en büyük sayı");
    min=prompt("en küçük sayı");

    
    rndsayi= Math.floor( ((Math.random()*max)+1));
    while(rndsayi<min){
        rndsayi= Math.floor( ((Math.random()*max)+1));
    }

    do {
        tahmin=  prompt("1 ile 10 arasında bir sayı tahmin edin. hak sayınız:"+hak);
        hak--;
        if(hak==0){
            alert("Hakkınız bitti");
            break;
        }
        
        if(tahmin==rndsayi){
        alert("kazandın");
            break;

        }
        else{
        alert("yanlış");
        }
    } while (tahmin!=rndsayi);
}
    
