const boton = document.getElementById("calcular");
const cantidad = document.getElementById("cantidad");
const valorCom=document.getElementById("valorCompra");
const valorDes=document.getElementById("valorDescuento");
const valorTotal=document.getElementById("total");
const sinDe = document.getElementById("sinDescuento");


document.getElementById("item2").style.display = 'none';

boton.addEventListener("click", ()=>{
    document.getElementById('item1').style.display = 'none';
    document.getElementById("item2").style.display = 'block';
    let valorD = 0
    valorCom.innerHTML = (cantidad.value)*5500000;   
    if (cantidad.value<=1){               
        sinDe.innerHTML=("No hay descuento para esta compra.")
        valorTotal.innerHTML=(cantidad.value)*5500000;
        valorDes.innerHTML=(cantidad.value)*5500000;
    }
    else if (cantidad.value >= 5 && cantidad.value < 10){
        valorD=5;
        valorDes.innerHTML= (((valorD)*((cantidad.value)*5500000))/100);
        valorTotal.innerHTML = ((cantidad.value)*5500000)-(((valorD)*((cantidad.value)*5500000))/100);
    }
    else if (cantidad.value >=10 && cantidad.value <=15){
        valorD=15;
        valorDes.innerHTML= (((valorD)*((cantidad.value)*5500000))/100);
        valorTotal.innerHTML = ((cantidad.value)*5500000)-(((valorD)*((cantidad.value)*5500000))/100);
    }
    else{
        valorD=25;
        valorDes.innerHTML= (((valorD)*((cantidad.value)*5500000))/100);
        valorTotal.innerHTML = ((cantidad.value)*5500000)-(((valorD)*((cantidad.value)*5500000))/100);
    }
});



valorDes.addEventListener("keyup",()=>{    
    if (valorDes.value > 0){
        valorTotal.innerHTML = ((cantidad.value)*5500000)-(((valorDes.value)*((cantidad.value)*5500000))/100)
    }
    else{
        valorTotal.innerHTML = ((cantidad.value)*5500000)-(((valorDes.value)*((cantidad.value)*5500000))/100)
        sinDe.innerHTML=("No hay descuento para esta compra.")
    }
})


