import { Colors, Nums } from "./enum"
import { commonCard, joCard, normalCard } from "./type"

export class Card {
    poker: normalCard[] = []
    constructor(poker?: normalCard[]) {
        if (poker) {
            this.poker = poker
        }
        else {
            this.init();
        }

    }
    private init() {
        const cols = Object.values(Colors)
        const nums = Object.values(Nums)
        for (const i of cols) {
            for (const j of nums) {
                this.poker.push({
                    color: i,
                    num: j,
                    getString() {
                        return this.color + this.num
                    }
                } as commonCard)

            }
        }
        let jo: joCard = {
            type: "small",
            getString() {
                return "jo"
            }
        }
        this.poker.push(jo)
        jo = {
            type: "big",
            getString() {
                return "JO"
            }
        }
        this.poker.push(jo)

    }
    print() {
        let result = "\n"
        this.poker.forEach((it, i) => {
            result += it.getString() + "\t"
            if ((i + 1) % 6 === 0) {
                result += "\n"
            }

        })
        console.log(result)
    }
    getRandom(min: number, max: number) {
        const dif = max - min
        return Math.floor(Math.random() * dif + min)
    }
    /**
     * 洗牌
     */
    shuffle() {
        for (let i = 0; i < this.poker.length; i++) {
            const targetIndex = this.getRandom(0, this.poker.length)
            const ref = this.poker[i];
            this.poker[i] = this.poker[targetIndex]
            this.poker[targetIndex] = ref

        }
    }
    /**
     * 发牌
     */

    publish(): [Card, Card, Card, Card] {
        let player1: Card, player2: Card, player3: Card, left: Card
        player1 = this.take(17);
        player2 = this.take(17);
        player3 = this.take(17);
        left = new Card(this.poker)

        return [player1, player2, player3, left]

    }
    private take(n: number): Card {
        const cards: normalCard[] = []
        for (let i = 0; i < n; i++) {
            cards.push(this.poker.shift() as normalCard)
        }
        return new Card(cards)
    }

}