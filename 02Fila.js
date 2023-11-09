class Fila{
    constructor(tam=5){
        this.dados = [];
        this.inicio = 0;
        this.fim = 0;
        this.tam = tam;
    }

    enqueue(dado){
        if (!this.isFull()){
            this.dados[this.fim] = dado;
            if (this.fim === this.tam){
                this.fim = 0;
            }else{
                this.fim ++;
            }
        }else throw new Error("Queue overflow");
    }
    dequeue(){
        if (!this.isEmpty()){
            if (this.inicio === this.tam){
                this.inicio = 0
            }else{
                this.inicio++
            }
        }else throw new Error("Queue underflow")
    }
    front(){
        if (!this.isEmpty()){
            return this.dados[this.inicio];
        }else throw new Error ("Empty queue");
    }
    size(){
        if (this.inicio <= this.fim){
            return this.fim - this.inicio;
        }else{
            return this.tam - this.inicio + this.fim + 1;
        }
    }
    isEmpty(){
        return this.inicio === this.fim;
    }
    isFull(){
        return this.size() === this.tam;
    }
    clear(){
        this.inicio = this.fim = 0;
    }
    toString(){}
}

export default Fila;
