let NC = +prompt ("Ingresa el número de litros")

switch (NC){
        case 1:
        
        console.log ("costo cita" + 200);
        console.log ("costo de tratamiento " + 200); 
        break;
        case 2:
        console.log ("costo cita " + 200);
        console.log ("costo de tratamiento " + 400); 
        break;
   
        case 3:
        console.log ("costo cita " + 200);
        console.log ("costo de tratamiento " + 600); 
        break;
   
        case 4:
        console.log ("costo cita " + 150);
        console.log ("costo de tratamiento " + 750); 
        break;
   
        case 5:
        console.log ("costo cita " + 150);
        console.log ("costo de tratamiento " + 900); 
        break;
   
        case 6:
        console.log ("costo cita " + 100);
        console.log ("costo de tratamiento " + 1000); 
        break;
   
        case 7:
        console.log ("costo cita " + 100);
        console.log ("costo de tratamiento " + 1100); 
        break;
   
        case 8:
        console.log ("costo cita " + 100);
        console.log ("costo de tratamiento " + 1200); 
        break;
   
        default:
        console.log ("costo cita " + 50);    
        let residual = 1200 + (NC*50);   
        console.log ("costo de tratamiento " + residual); 
        break;
   
}

 