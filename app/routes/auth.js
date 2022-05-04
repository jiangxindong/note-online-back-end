module.exports = app => {
  const { router, controller } = app;
  const prefix = '/auth';
  router.post(`${prefix}/login`, controller.auth.login);
  router.post(`${prefix}/signup`, controller.auth.create);
};
