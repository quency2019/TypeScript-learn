var Colors;
(function (Colors) {
    Colors["heart"] = "\u2665";
    Colors["spade"] = "\u2664";
    Colors["club"] = "\u2663";
    Colors["diamond"] = "\u2662";
})(Colors || (Colors = {}));
var Num;
(function (Num) {
    Num["Ace"] = "A";
    Num["two"] = "2";
    Num["three"] = "3";
    Num["four"] = "4";
    Num["five"] = "5";
    Num["six"] = "6";
    Num["seven"] = "7";
    Num["eight"] = "8";
    Num["nine"] = "9";
    Num["ten"] = "10";
    Num["Jack"] = "J";
    Num["Queen"] = "Q";
    Num["King"] = "K";
})(Num || (Num = {}));
function createCard() {
    const card = [];
    const cols = Object.values(Colors);
    const Nums = Object.values(Num);
    for (const i of cols) {
        for (const j of Nums) {
            card.push({
                color: i,
                num: j
            });
        }
    }
    console.log(card);
    return card;
}
function printCard(card) {
    let result = "\n";
    card.forEach((item, i) => {
        let src = item.color + item.num;
        result += src + "\t";
        if ((i + 1) % 6 === 0) {
            result += "\n";
        }
        console.log(result);
    });
}
const card = createCard();
printCard(card);
