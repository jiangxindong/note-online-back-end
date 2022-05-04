const { Controller } = require('egg');
class AuthController extends Controller {
  async login() {
    const { ctx, service } = this;
    ctx.body = await service.auth.login(ctx.request.body);
  }
  async create() {
    const { ctx, service } = this;
    ctx.body = await service.auth.create(ctx.request.body);
  }
}
// module.exports = AuthController;
module.exports = AuthController;
