let rndsayi=0;
let tahmin=0;

function oyun(){
    rndsayi= Math.floor( ((Math.random()*10)+1));
    do {
        tahmin=  prompt("1 ile 10 arasında bir sayı tahmin edin");
    if(tahmin==rndsayi){
        alert("kazandın");
    }
    else{
        alert("yanlış");
    }
    } while (tahmin!=rndsayi);
}
    
