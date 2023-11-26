class Registro {
	constructor(chave, dado) {
		this.chave = chave;
		this.dado = dado;
	}
}

/*
2*2 = 4 % 10 = 4
7*2 = 14 % 10 = 4
3*2 = 6 % 10 = 6
8*2 = 16 % 10 = 6
4*2= 8 % 10 = 8
9*2 = 18 % 10 = 8
5*2= 10 % 10 = 0
10*2 = 20 % 10 = 0
6*2 = 12 % 10 = 2
funcaoHash(key){
	return (key * 2)%10
}
*/

class TabelaHash {
	constructor() {
		this.tabela = [];
		this.size = 20;
	}

	funcaoHash(palavra) {
		let soma = 0;
		for (let x = 0; x < palavra.length; x++) {
			soma += palavra.charCodeAt(x) * 31;
		}
		console.log("soma = " + soma);
		return soma % 20;
	}

	add(chave, dado) {
		let novo = new Registro(chave, dado);
		let indiceHash = this.funcaoHash(chave);
		console.log("indiceHash=" + indiceHash);


		while (
			this.tabela[indiceHash] != null ||
			this.tabela[indiceHash] != undefined
		) {
			if (chave === this.tabela[indiceHash].chave) {
				break;
			}


			indiceHash++;
			indiceHash %= size;
		}

		this.tabela[indiceHash] = novo;
		console.log(this.tabela);
	}

	remove(chave) {
		let indiceHash = this.funcaoHash(chave);

		while (
			this.tabela[indiceHash] != null ||
			this.tabela[indiceHash] != undefined
		) {
			if (this.tabela[indiceHash].chave === chave) {
				this.tabela[indiceHash] = null;
				console.log(this.tabela);
				return true;
			}
			indiceHash++;
			indiceHash %= size;
		}
		console.log(this.tabela);
		return false;
	}

	get(chave) {
		let indiceHash = this.funcaoHash(chave);

		while (
			this.tabela[indiceHash] ||
			this.tabela[indiceHash] != undefined
		) {
			if (this.tabela[indiceHash].chave === chave) {
				return this.tabela[indiceHash].dado;
			}
			indiceHash++;
			indiceHash %= size;
		}

		return undefined;
	}
}

let f = new TabelaHash();

f.add("nome", { nome: "taniro", idade: 35 });
f.add("sobrenome", "chacon");
console.log(f.get("sobrenome"));
f.add("sobrenome", "rodrigues");
console.log(f.get("sobrenome"));
f.remove("sobrenome");
console.log(f.get("sobrenome"));
console.log(f.get("nome"));
