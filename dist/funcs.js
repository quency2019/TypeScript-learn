import { Color, Nums } from "./enum";
export function createCard() {
    const card = [];
    const cols = Object.values(Color);
    const nums = Object.values(Nums);
    for (const i of cols) {
        for (const j of nums) {
            card.push({
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
    card.push(jo);
    jo = {
        type: "big",
        getString() {
            return "JO";
        }
    };
    card.push(jo);
    return card;
}
export function printCard(card) {
    let result = "\n";
    card.forEach((it, i) => {
        result += it.getString() + "\t";
        if ((i + 1) % 6 === 0) {
            result += "\n";
        }
    });
    console.log(result);
}
