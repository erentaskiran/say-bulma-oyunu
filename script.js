


let tahmin;
let rnd=Math.floor( Math.random()*10);

let hak=0;

function hakekle(){
    hak=document.getElementById("asd").value;
}
function tahminoyunu(){
    
    
   tahmin=document.getElementById("giris").value; 
   
    hak--;
    if(hak==0){
        
        return document.getElementById("sonuc").innerHTML=("Bulamadınız.Sayı "+rnd+" idi");
        
    }
    if (tahmin>rnd) {
        
        
        return document.getElementById("sonuc").innerHTML=("düşür");
        
    }
    else if(tahmin==rnd){
      
        
        return document.getElementById("sonuc").innerHTML=("Tebrikler doğru bildiniz ");
        
        
    }
    else if (tahmin<rnd) {
        

        return document.getElementById("sonuc").innerHTML=("yükselt");       
        
    }
    
    
    
}


function puanhsp(hakkı){
    let asd=hakkı;
    let hsp=(100-(((useranswer-1)-asd)*(100/useranswer)) );
    return hsp;
}

