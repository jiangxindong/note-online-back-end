const { Service } = require('egg');
class AuthService extends Service {
  async login(params) {
    const { ctx } = this;
    ctx.body = await ctx.model.User.findAll(params);
  }
  async create() {
    const ctx = this.ctx;
    const { username, password, nickName, phoneNumber } = ctx.request.body;
    const user = await ctx.model.User.create({
      username,
      password,
      nickName,
      phoneNumber,
    });
    ctx.status = 201;
    ctx.body = user;
  }
}
module.exports = AuthService;
