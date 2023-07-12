function Censo(){
    const aves = prompt('Ingresa las aves que registraste');
    const avesTotales = 25;

    if(aves == avesTotales) {
    return alert ("Registraste todas las aves!")
    }

    if(aves > avesTotales) {
    const avNuevas = aves - avesTotales;
    return alert ("Registraste " + avNuevas + " aves nuevas!")
    }
    
    else{
    const sinReg = avesTotales - aves;
    return alert ("Aún te falta registrar " + sinReg)
    }
}

console.log(Censo())