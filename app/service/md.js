'use strict';

const Service = require('egg').Service;
const { CODE } = require('@/public/constant/error');
const { Op } = require('sequelize');

class MdService extends Service {
  async create(params) {
    const { ctx } = this;
    return ctx.formatResp(await ctx.model.Md.create(params));
  }
  async index(query) {
    const { ctx } = this;
    return ctx.formatResp(await ctx.model.Md.findAll(query));
  }
  async show(id) {
    const { ctx } = this;
    const md = await ctx.model.Md.findByPk(id);
    if (!md) {
      ctx.throwError(CODE.NOT_EXISTED_ENTITY);
    } else {
      return ctx.formatResp(md);
    }
  }
  async update(params, id) {
    const { ctx } = this;
    const result = await ctx.model.Md.update(params, {
      where: {
        id,
      },
    });
    return ctx.formatResp(result);
  }
  async destroy(id) {
    const { ctx } = this;
    const { Md } = ctx.model;
    const deleteData = Md.findByPk(id);
    let result = null;
    if (deleteData && !deleteData.isLeaf) {
      result = await Md.destroy({
        where: {
          [Op.or]: [{ id }, { parentId: id }],
        },
      });
    } else {
      result = await Md.destroy({
        where: {
          id,
        },
      });
    }
    result = !!result;
    return ctx.formatResp(result);
  }
  async getTree(query) {
    const { ctx } = this;
    const list = JSON.parse(JSON.stringify(await ctx.model.Md.findAll(query)));
    const buildTree = (list, parentId) => {
      const treeList = [];
      for (const item of list) {
        if (item.parentId === parentId) {
          treeList.push({
            ...item,
            children: buildTree(list, item.id),
          });
        }
      }
      return treeList;
    };
    const treeList = buildTree(list, 0);
    return ctx.formatResp(treeList);
  }
}

module.exports = MdService;
