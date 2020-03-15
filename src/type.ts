import { Color, Nums } from "./enum"
export type Card = normalCard[]

export interface normalCard {
    getString(): String

}
export interface joCard extends normalCard {
    type: "big" | "small"
}

export interface commonCard extends normalCard {
    color: Color,
    num: Nums
}
