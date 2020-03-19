import 'reflect-metadata'

/**
 * 
 * @param description 使用reflect-metadata
 */
const key = Symbol.for('description')
/**
 * 装饰器
 */
export function descriptor(description: string) {
    return Reflect.metadata(key, description)

}


export function printObj(obj: any) {
    const cons = Object.getPrototypeOf(obj)

    //找不到为什么没有Reflect.hasMetadata(key, cons)
    console.log(Reflect.hasMetadata(key, cons))
    if (Reflect.hasMetadata(key, cons)) {
        console.log(Reflect.getMetadata(key, cons))
    } else {
        console.log(cons.constructor.name)
    }


    for (const k in obj) {
        if (Reflect.hasMetadata(key, cons, k)) {
            console.log(`${Reflect.getMetadata(key, cons, k)}:${obj[k]}`)
        }
        else {
            console.log(`${k}:${obj[k]}`)

        }
    }


}