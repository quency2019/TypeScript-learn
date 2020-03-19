import { classDescriptor, propDescriptor } from './descriptors'

@classDescriptor("用户")
class User {
    @propDescriptor("帐号")
    loginId: string;

    @propDescriptor("密码")
    loginPwd: string;
}

const u = new User()
u.loginId = "www";
u.loginPwd = "aaaaa";

/**
 * 打印对象信息
 */
function printObj(obj: any) {
    if (obj.$classDescription) {
        console.log(obj.$classDescription)
    } else {
        console.log(obj.__proto__.constructor.name)
    }

    if (!obj.$description) {
        obj.$description = []
    }
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const object = obj.$description.find(p => p.propName === key)
            if (object) {
                console.log(object.propDescription, obj[key])
            } else {
                console.log(key, obj[key])
            }
        }
    }


}
printObj(u)