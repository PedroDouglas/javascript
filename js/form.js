var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();
	
	var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteFormulario(form);


	 
	var pacienteTr = document.createElement("tr");

	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTD = document.createElement("td");

	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura
    imcTD.textContent = calculaImc(peso,altura);
	
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTD);

	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);



});


function obtemPacienteFormulario(form){
    var paciente = {
        nome : form.nome.value,
        peso : form.altura.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value, form.altura,value)
    }


    return paciente;
}