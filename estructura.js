//PRIMER PUNTO
 let numero=1
 let sumador=0
 while(numero!=0){
 numero=+prompt('Digite el numero')
 if(numero>0){
     sumador=sumador+numero
 } 
 }console.log(sumador)

//SEGUNDO PUNTO
aleatorio=Math.round(Math.random()*10)
 if(aleatorio!=0){
console.log(aleatorio)
}  

//TERCER PUNTO
 for(i=1;i<=20;i++){
    aleatorio=Math.round(Math.random()*1000)
    console.log(aleatorio)
 }

//CUARTO PUNTO
 let numero=+prompt('Digite el numero ')
 while(numero<=0){
 numero=+prompt('Digite un numero positivo ')
 } 
 for(i=1;i<=numero;i++){
     if(i%2==1){
         console.log(i)
    }   
 }    

//QUINTO PUNTO
 let sumNiños=0
 let ConNiños=0
 let sumJoven=0
 let conJoven=0
 let SumAdultos=0
 let conAdultos=0
 let SumViejos=0
 let conViejos=0
 for(i=1;i<=4;i++){
 let edad=+prompt('Digite la edad de la '+i+' persona')
 while(edad<0){
 edad=+prompt('Eror, digite la '+i+' edad') 
} 
 let peso=parseFloat(prompt('Digite el peso de la '+i+' persona'))
 while(peso<0){
 peso=parseFloat(prompt('Eror, digite el peso de la '+i+' persona'))
 }  
 if(edad>=0 && edad<=12){
    sumNiños=sumNiños+peso
    ConNiños=ConNiños+1
 } else if(edad>=13 && edad<=29){
     sumJoven=sumJoven+peso
     conJoven=conJoven+1
 } else if(edad>=30 && edad<=59){
     SumAdultos=SumAdultos+peso
     conAdultos=conAdultos+1
 }else{
     SumViejos=SumViejos+peso
     conViejos=conViejos+1
 }
 }
 console.log('Promedio peso de los Niños '+sumNiños/ConNiños)
 console.log('Promedio peso de los Jovenes '+sumJoven/conJoven)
 console.log('Promedio peso de los Adultos '+SumAdultos/conAdultos)
 console.log('Promedio peso de los Viejos '+SumViejos/conViejos) 

//SEXTO PUNTO

for(let i=1;i<=5;i++){
    for(let j=1;j<=4;j++){
      if(j<4){
        document.write(`1.${i}.${j}-`)
        }
      else if(j==4){
        document.write(`1.${i}.${j} <br>`)
        }
  }
    }

//SEPTIMO PUNTO

 let ceroAuno=0
 let unoMenos3=0
 let tresOmas=0
 let ani=''
 let cantidad=0
 let animal=+prompt('1. Elefante \n 2. Jirafa \n 3. Chimpance \n ¿Que animal desea estudiar? ')
 while(animal<1 && animal>3){
 animal=+prompt('Opcion invalida, ¿Que animal desea estudiar? ')
 }
 switch(animal){
     case 1:
         ani='Elefante'
         cantidad=20
         for(i=1;i<=cantidad;i++){ 
         let edadElefante=+prompt('Digite la edad del '+i+' elefante ')
         while(edadElefante<0){
         edadElefante=+prompt('Edad invalida, Digite la edad del '+i+' elefante ')
         }  
         if(edadElefante>=0 && edadElefante<=1){
             ceroAuno=ceroAuno+1
         } else if(edadElefante>1 && edadElefante<3){
             unoMenos3=unoMenos3+1
         } else{
             tresOmas=tresOmas+1
         }
         }
         break;
     case 2:
         ani='Jirafa'
         cantidad=15
         for(i=1;i<=cantidad;i++){ 
             let edadJirafa=+prompt('Digite la edad de la '+i+' jirafa ')
             while(edadJirafa<0){
             edadJirafa=+prompt('Edad invalida, Digite la edad de la '+i+' jirafa ')
             }  
             if(edadJirafa>=0 && edadJirafa<=1){
                 ceroAuno=ceroAuno+1
             } else if(edadJirafa>1 && edadJirafa<3){
                 unoMenos3=unoMenos3+1
             } else{
                 tresOmas=tresOmas+1
             }
         }
         break;
     case 3:
         ani='Chimpance'
         cantidad=40
         for(i=1;i<=cantidad;i++){ 
             let edadChimpance=+prompt('Digite la edad del '+i+' chimpance ')
             while(edadChimpance<0){
             edadChimpance=+prompt('Edad invalida, Digite la edad del '+i+' chimpance ')
             }  
             if(edadChimpance>=0 && edadChimpance<=1){
                 ceroAuno=ceroAuno+1
             } else if(edadChimpance>1 && edadChimpance<3){
                 unoMenos3=unoMenos3+1
             } else{
                 tresOmas=tresOmas+1
             }
         }
         break;
     default:
         alert('Valor invalido')


 } console.log('Datos de '+ani)
 console.log('De 0 a 1 año '+((ceroAuno*100)/cantidad)+' %')
 console.log('De +1 a menos de 3 años '+((unoMenos3*100)/cantidad)+' %')
 console.log('De 3 o mas años '+((tresOmas*100)/cantidad)+' %')

//OCTAVO PUNTO

 let cantidad=+prompt('Digite la cantidad de vendedores ')
 while(cantidad<=0){
     cantidad=+prompt('Dato invalido, digite la cantidad de vendedores ')
 }
 for(i=1;i<=cantidad;i++){
 venta1=parseFloat(prompt('Digite el valor de su primera venta, vendedor '+i))
 venta2=parseFloat(prompt('Digite el valor de su segunda venta, vendedor '+i))
 venta3=parseFloat(prompt('Digite el valor de su tercera venta, vendedor '+i))
 sueldoBase=parseFloat(prompt('Digite su sueldo base '))

 console.log('Vendedor ' +i)
 console.log('El vendedor recibira por concepto de comision: $' +((venta1+venta2+venta3)*0.10))
 console.log('El vendedor recibira un total del: $'+(sueldoBase+(((venta1+venta2+venta3)*0.10))))
 }  

//NOVENO PUNTO


 let salario=950000
 let comision=170000
 let sumValor=0
 let numAutos=+prompt('Digite la cantidad de vehiculos vendidos')
 while(numAutos<0){
     numAutos=+prompt('Error, digite la cantidad de vehiculos vendidos')
 }
 for(i=1;i<=numAutos;i++){
     let valorAutos=parseFloat(prompt('Digite el valor del '+i+' Automovil'))
     while(valorAutos<=0){
     valorAutos=parseFloat(prompt('Error, digite el valor del '+i+' Automovil'))
     } 
     sumValor=sumValor+valorAutos
 }  
 console.log('El salario del vendedor es: $'+(salario+(comision*numAutos)+(sumValor*0.05)))

//DECIMO PUNTO

 let nombre=prompt('Digite su nombre ')
 let sumaNotaC=0
 let sumaNotaS=0
 while(nombre==''){
     nombre=prompt('Error, digite su nombre ')
 }
 for(i=1;i<=2;i++){
 notaCuarenta=parseFloat(prompt('Digite la '+i+' nota del 40%'))
 while(notaCuarenta<0){
 notaCuarenta=parseFloat(prompt('Error, digite la '+i+' nota del 40%')) 
 }
 sumaNotaC=sumaNotaC+notaCuarenta
 }
 for(i=1;i<=3;i++){
 notaSesenta=parseFloat(prompt('Digite la '+i+' nota del 60%'))
 while(notaSesenta<0){
 notaSesenta=parseFloat(prompt('Error, digite la '+i+' nota del 60%'))   
 }
 sumaNotaS=sumaNotaS+notaSesenta
 }
 console.log('El promedio del estudiante '+nombre+' es de '+(((sumaNotaC/2)*0.40)+(sumaNotaS/3)*0.60))
