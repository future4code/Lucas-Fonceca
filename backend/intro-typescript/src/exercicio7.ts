function transformaDNAemRNA(sequenciaDNA : string):string {
 const trocaAdeninaPorUracila : string = sequenciaDNA.replace(/A/g,"U");
 const trocaTiminaPorAdenina : string = trocaAdeninaPorUracila.replace(/T/g, "A");
 const trocaCitosinaPorGuanina : string = trocaTiminaPorAdenina.replace (/C/g, "F");
 const trocaGuaninaPorCitosina : string = trocaCitosinaPorGuanina.replace (/G/g, "C");
 const sequenciaRNA : string = trocaGuaninaPorCitosina.replace (/F/g, "G");
 
 return sequenciaRNA;

}