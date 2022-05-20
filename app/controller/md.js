'use strict';

const Controller = require('egg').Controller;

class MdController extends Controller {
  async create() {
    const { ctx, service } = this;
    ctx.body = await service.md.create(ctx.request.body);
  }
  async index() {
    const { ctx, service } = this;
    ctx.body = await service.md.index(ctx.query);
  }
  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.md.show(ctx.params.id);
  }
  async update() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.md.update(ctx.request.body, ctx.params.id);
  }
  async destroy() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.md.destroy(ctx.params.id);
  }
  async getTree() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.md.getTree(ctx.request.body);
  }
}

module.exports = MdController;
