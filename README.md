madison.js
==========

Madison JavaScript Framework v0.1

Available under the GNU General Public License
http://www.gnu.org/licenses/gpl.html

Author Vinicius Knob
Date: 2013-06-25


Como funciona
-------------

Madison necessita de regras para funcionar. As regras são na verdade a configuração 
de Madison. Toda regra inserida em Madison deve retornar true ou false. Cada regra 
de Madison é composta por duas premissas:

	- rule: 			Function responsável por conter a lógica da regra para 
						verificação, deve retornar true ou false;
				
	- errorMessage: 	String com a descrição do erro caso a verificação retorne 
						false.
						

Uso
---

Existem duas formas de inserir regras, veja:

	1 - Inserindo uma única regra
	
	Madison({
		rule: function () {
			var nome = document.querySelector('#inputNome').value;
			return nome !== "";
		},
		errorMessage: 'Nome não pode ser vazio!'
	});
	
	2 - Inserindo várias regras de uma vez
	
	Madison([{
		rule: function () {
			var nome = document.querySelector('#inputNome').value;
			return nome !== "";
		},
		errorMessage: 'Nome não pode ser vazio!'
	}, {
		rule: function () {
			var idade = document.querySelector('#inputIdade').value;
			return idade !== "";
		},
		errorMessage: 'Idade não pode ser vazio!'
	}]);
	
Para executar Madison, existem duas formas, veja:

	1 - Lançamento do erro, onde a execução é interrompida ao encontrar
	o primeiro erro:
	
	Madison.execute();
	
	2 - Retorno dos erros, onde um array contendo todos os errors é 
	retornado. Nenhum erro é lançado:
	
	Madison.executeAndReturnErrors();
