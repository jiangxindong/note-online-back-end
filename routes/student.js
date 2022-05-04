const Student = require('../db/models').student;
const router = require('koa-router')();
//添加学生信息
router.post('/student', async (ctx) => {
  ctx.body = await Student.create(ctx.request.body);
});
//更新学生信息
router.put('/student', async (ctx) => {
  const { id } = ctx.request.body;
  ctx.body = await Student.update(ctx.request.body, { where: { id } });
});
//获取学生列表
router.get('/students', async (ctx) => {
  ctx.body = await Student.findAll();
});
//根据id删除学生信息
router.delete('/student/:id', async (ctx) => {
  const { id } = ctx.params;
  ctx.body = await Student.destroy({ where: { id } });
});

module.exports = router;
