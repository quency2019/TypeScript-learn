"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("./enum");
class Card {
    constructor(poker) {
        this.poker = [];
        if (poker) {
            this.poker = poker;
        }
        else {
            this.init();
        }
    }
    init() {
        const cols = Object.values(enum_1.Colors);
        const nums = Object.values(enum_1.Nums);
        for (const i of cols) {
            for (const j of nums) {
                this.poker.push({
                    color: i,
                    num: j,
                    getString() {
                        return this.color + this.num;
                    }
                });
            }
        }
        let jo = {
            type: "small",
            getString() {
                return "jo";
            }
        };
        this.poker.push(jo);
        jo = {
            type: "big",
            getString() {
                return "JO";
            }
        };
        this.poker.push(jo);
    }
    print() {
        let result = "\n";
        this.poker.forEach((it, i) => {
            result += it.getString() + "\t";
            if ((i + 1) % 6 === 0) {
                result += "\n";
            }
        });
        console.log(result);
    }
    getRandom(min, max) {
        const dif = max - min;
        return Math.floor(Math.random() * dif + min);
    }
    /**
     * 洗牌
     */
    shuffle() {
        for (let i = 0; i < this.poker.length; i++) {
            const targetIndex = this.getRandom(0, this.poker.length);
            const ref = this.poker[i];
            this.poker[i] = this.poker[targetIndex];
            this.poker[targetIndex] = ref;
        }
    }
    /**
     * 发牌
     */
    publish() {
        let player1, player2, player3, left;
        player1 = this.take(17);
        player2 = this.take(17);
        player3 = this.take(17);
        left = new Card(this.poker);
        return [player1, player2, player3, left];
    }
    take(n) {
        const cards = [];
        for (let i = 0; i < n; i++) {
            cards.push(this.poker.shift());
        }
        return new Card(cards);
    }
}
exports.Card = Card;
