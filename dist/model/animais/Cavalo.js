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
class Cavalo extends Animal_1.default {
    som() {
        console.log(`Cavalo comer? ${this.comer}`);
        console.log(`Cavalo anda? ${this.andar}`);
        console.log(`Cavalo respira? ${this.respirar}`);
        console.log("Cavalo faz Iiirrrrí");
    }
}
exports.default = Cavalo;
