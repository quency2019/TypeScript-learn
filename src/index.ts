type Card = NormalCard[]
type Color = "♤" | "♣" | "♡" | "♢"
type NormalCard = {
    color: Color,
    num: number
}
//得到一副牌
function createCard(): Card {
    const card: Card = [];
    for (let i = 1; i <= 13; i++) {
        card.push({
            color: "♡",
            num: i,
        })
        card.push({
            color: "♢",
            num: i,
        })
        card.push({
            color: "♣",
            num: i,
        })
        card.push({
            color: "♤",
            num: i,
        })
    }
    return card
}

function printCard(card: Card) {
    let result = "\n"
    card.forEach((it, i) => {
        let str = it.color
        if (it.num <= 10) {
            str += it.num
        } else if (it.num === 11) {
            str += "J"
        } else if (it.num === 12) {
            str += "Q"
        } else if (it.num === 13) {
            str += "k"
        }
        result += str + "\t"
        if ((i + 1) % 6 === 0) {
            result += "\n"
        }
        console.log(result);
    })

}

const myCard = createCard()
printCard(myCard)