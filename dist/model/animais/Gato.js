"use strict";
// 3. Dado o seguinte diagrama:
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//         animal
//  cachorro cavalo gato
// Identifique os atributos e comportamentos que são comuns entre os
// 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// comportamento diferente para cada animal.
const Animal_1 = __importDefault(require("./Animal"));
class Gato extends Animal_1.default {
    som() {
        console.log(`Gato comer? ${this.comer}`);
        console.log(`Gato anda? ${this.andar}`);
        console.log(`Gato respira? ${this.respirar}`);
        console.log("Gato faz miau");
    }
}
exports.default = Gato;
