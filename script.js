function validar() {
	
	var valor = document.getElementById("numero").value;
	
	if (valor.length > 2) {
		
		alert("Você digitou um número que tem mais de 2 algarismos.");
		return false;
		
	} else if (valor.length < 2) {
		alert("Você digitou um número que tem menos de 2 algarismos.");
		return false;
	}
	
	return true;
	
}