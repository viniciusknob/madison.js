# Madison v0.2.0 Beta

Madison é um framework de regras escrito em JavaScript. Ele segue o mesmo conceito de [seu irmão](https://github.com/viniciusknob/madison) da linguagem Java. 


## Versionamento

`<quebra>.<novo>.<melhoria>` = `1.2.3`

- **quebra**: Indica uma alteração que modifica consideravelmente a estrutura e composição do framework, resultando em quebra de compatibilidade(resetar novo e melhoria);
- **novo**: Indica uma nova funcionalidade sem quebra de compatibilidade (resetar melhoria);
- **melhoria**: Indica uma melhoria e/ou correção de bugs sem quebra de compatibilidade.


## Como funciona

Madison necessita de regras para funcionar. As regras são na verdade a configuração de Madison. Toda regra inserida em Madison deve retornar true ou false. Cada regra de Madison é composta por duas premissas:

- **rule**: Function responsável por conter a lógica da regra para verificação, deve retornar true ou false;
- **errorMessage**: String com a descrição do erro caso a verificação retorne false.
						

## Como usar

**Existem duas formas de inserir regras, veja:**

Inserindo uma única regra
	
```js
Madison({
	rule: function () {
		var nome = document.querySelector('#inputNome').value;
		return nome !== "";
	},
	errorMessage: 'Nome não pode ser vazio!'
});
```
	
Inserindo várias regras de uma vez

```js
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
```
	
**Para executar Madison, existem duas formas, veja:**

Lançamento do erro, onde a execução é interrompida ao encontrar o primeiro erro

```js
Madison.execute();
```
	
Retorno dos erros, onde um array contendo todos os errors é retornado. Nenhum erro é lançado

```js
Madison.executeAndReturnErrors();
```

	
## Autor

**Vinícius Knob**

- [http://twitter.com/viniciusknob](http://twitter.com/viniciusknob)
- [http://github.com/viniciusknob](http://github.com/viniciusknob)


## Licença

Copyright (C) 2013 Vinicius Knob
 
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.