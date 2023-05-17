class Pilha{
    constructor(tam=5){
        this.dados=[];
        this.topo=0;
        this.tam=tam;
    }
    push(dado){
        if (!this.isFull()){
            this.dados[this.topo]=dado;
            this.topo++;
         } else{
                throw Error ("Stack OverFlow");
            }
        };
    pop(){
        if(!this.isEmpty()){
            this.topo --;
        }else{
                throw Error ("Stack UnderFlow");
            }
        };
    isFull(){
        return (this.size()>=this.tam)
    };
    isEmpty(){
        return (this.size()===0)
    };
    size(){
        return this.topo;      
    };
    top(){
        if (!this.isEmpty()){
            return this.dados[this.topo-1];
        }else{
            throw new Error("Stack underflow");
        }
    };
}

export default Pilha;
