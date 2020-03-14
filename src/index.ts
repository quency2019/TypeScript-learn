type Card = commonCard[]
enum Colors {
    heart = "♥",
    spade = "♤",
    club = "♣",
    diamond = "♢"
}
enum Num {
    Ace = "A",
    two = "2",
    three = "3",
    four = "4",
    five = "5",
    six = "6",
    seven = "7",
    eight = "8",
    nine = "9",
    ten = "10",
    Jack = "J",
    Queen = "Q",
    King = "K"
}
type commonCard = {
    color: Colors,
    num: Num
}
function createCard(): Card {
    const card: Card = []
    const cols = Object.values(Colors)
    const Nums = Object.values(Num)
    for (const i of cols) {

        for (const j of Nums) {
            card.push({
                color: i,
                num: j
            })
        }

    }
    console.log(card)
    return card
}
function printCard(card: Card) {
    let result = "\n"
    card.forEach((item, i) => {
        let src = item.color + item.num
        result += src + "\t"
        if ((i + 1) % 6 === 0) {
            result += "\n"
        }
        console.log(result)
    })

}
const card = createCard()
printCard(card)