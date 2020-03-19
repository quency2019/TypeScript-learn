/**
 * 类装饰器
 */
export function classDescriptor(description: string) {
    return function (target: Function) {
        target.prototype.$classDescription = description
    }

}
/**
 * 属性装饰器
 */
export function propDescriptor(description: string) {
    return function (target: any, propName: string) {

        if (!target.$description) {
            target.$description = []
        }
        target.$description.push({
            propDescription: description,
            propName: propName

        })
        // console.log(target.$description)

    }

}