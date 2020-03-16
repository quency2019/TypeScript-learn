import { Card } from "./card"


const card = new Card()
card.shuffle();
console.log("======洗牌之后======")
card.print()
const result = card.publish()
console.log("======发牌之后之后======")
console.log("======玩家1======")
result[0].print()
console.log("======玩家2======")
result[1].print()
console.log("======玩家3======")
result[2].print()
console.log("======桌面======")
result[3].print()