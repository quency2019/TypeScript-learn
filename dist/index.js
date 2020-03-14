//得到一副牌
function createCard() {
    const card = [];
    for (let i = 1; i <= 13; i++) {
        card.push({
            color: "♡",
            num: i,
        });
        card.push({
            color: "♢",
            num: i,
        });
        card.push({
            color: "♣",
            num: i,
        });
        card.push({
            color: "♤",
            num: i,
        });
    }
    return card;
}
function printCard(card) {
    let result = "\n";
    card.forEach((it, i) => {
        let str = it.color;
        if (it.num <= 10) {
            str += it.num;
        }
        else if (it.num === 11) {
            str += "J";
        }
        else if (it.num === 12) {
            str += "Q";
        }
        else if (it.num === 13) {
            str += "k";
        }
        result += str + "\t";
        if (i % 6 === 0) {
            result += "\n";
        }
        console.log(result);
    });
}
const myCard = createCard();
printCard(myCard);
