const { Service } = require('egg');
const { CODE } = require('@/public/constant/error');
class AuthService extends Service {
  async login(params) {
    const { ctx, app } = this;
    const { username, password } = params;
    const user = await ctx.model.User.findAll({
      where: {
        username,
      },
    });
    if (!user.length) {
      ctx.throwError(CODE.NOT_EXISTED_USERNAME);
    }
    if (user[0].password !== password) {
      ctx.throwError(CODE.WRONG_PASSWORD);
    }
    if (user[0].password === password) {
      const token = app.jwt.sign(
        {
          username,
        },
        app.config.verifyToken.secret,
        { expiresIn: '60m' }
      );
      return ctx.formatResp(token);
    }
    ctx.throwError(CODE.UNKNOWN_ERROR);
  }
  async create() {
    const ctx = this.ctx;
    const { username, password, nickName, phoneNumber } = ctx.request.body;
    const user = await ctx.model.User.findAll({
      where: {
        username,
      },
    });
    if (!user.length) {
      return ctx.formatResp(
        await ctx.model.User.create({
          username,
          password,
          nickName,
          phoneNumber,
        })
      );
    }
    ctx.throwError(CODE.EXISTED_USERNAME);
  }
}
module.exports = AuthService;
