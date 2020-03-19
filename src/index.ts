import { descriptor, printObj } from './descriptors'


@descriptor("用户")
class User {
    @descriptor("帐号")
    loginId: string;

    @descriptor("密码")
    loginPwd: string;
}

const u = new User()
u.loginId = "www";
u.loginPwd = "aaaaa";

/**
 * 打印对象信息
 */

printObj(u)