import sha1 from 'sha1';

/**
 * @interface 登录请求体
 */
interface loginReq {
  /**
   * @description 账号
   */
  account: string;
  /**
   * @description 密码
   */
  password: string;
}

/**
 * 登录
 * @param {loginReq} data -登录请求参数
 */
function LOGIN(data: loginReq): Promise<{ token: string }> {
  return new Promise((resolve, reject) => {
    if (!data.account || !data.password) {
      reject();
      return;
    }

    resolve({
      token: sha1(`${data.account}${data.password}`),
    });
  });
}

export { loginReq, LOGIN };
