class Veiculo {
    constructor(tipo, propulsao, qtde_ocupantes) {
        this.tipo = tipo;
        this.propulsao = propulsao;
        this.qtde_ocupantes = qtde_ocupantes;
    }
    
    poluente() {
        let resultado;
        if (this.propulsao === 'eletrico') {
            resultado = (`${this.tipo} ${this.propulsao} não emite CO2`);
        } else {
            resultado = (`${this.tipo} ${this.propulsao} emite CO2`);
        }
        return resultado
    }
}

class Carro extends Veiculo {
    constructor(propulsao, qtde_ocupantes, marca, modelo, ano_fabricacao) {
        super('carro', propulsao, qtde_ocupantes);
        this.marca = marca;
        this.modelo = modelo;
        this.ano_fabricacao = ano_fabricacao;
    }
}

class Moto extends Veiculo {
    constructor(propulsao, qtde_ocupantes, marca, modelo, ano_fabricacao) {
        super('moto', propulsao, qtde_ocupantes);
        this.marca = marca;
        this.modelo = modelo;
        this.ano_fabricacao = ano_fabricacao;
    }
}

Carro.prototype = Object.create(Veiculo.prototype);
Moto.prototype = Object.create(Veiculo.prototype);

const vw_up = new Carro('combustão', 5, 'Volkswagen', 'UP!', 2015);
console.log(vw_up.poluente());

const vw_gol = new Carro('combustão', 5, 'Volkswagen', 'Gol', 2016);
console.log(vw_gol.tipo);

const vw_polo = new Carro('combustão', 5, 'Volkswagen', 'Polo', 2019);
console.log(vw_polo.ano_fabricacao);


const cg_150 = new Moto('combustao', 2, 'Honda', 'CG', 2016);
console.log(cg_150.tipo);

const fazer = new Moto('combustao', 2, 'Yamaha', 'Fazer', 2017);
console.log(fazer.poluente());

const twister = new Moto('combustao', 2, 'Honda', 'Twister', 2018);
console.log(twister.modelo);