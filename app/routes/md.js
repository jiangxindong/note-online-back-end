module.exports = app => {
  const { router, controller } = app;
  const prefix = '/md';
  router.get(`${prefix}/getTree`, controller.md.getTree);
  router.resources('md', `${prefix}`, controller.md);
};
