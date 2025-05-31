let nGattiTot, nGattiFila;
nGattiTot=Number(prompt("Inserisci il numero di gatti totale"));
nGattiFila=Number(prompt("Inserisci il numero di gatti per ogni fila"));

numeroFile=Math.floor(nGattiTot/nGattiFila)
console.log("Ci sono " + numeroFile + " file di gatti, mancano " + nGattiTot%nGattiFila + " gatti per completare la fila numero " + Number(numeroFile + 1));