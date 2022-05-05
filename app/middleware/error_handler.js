const { CODE, MESSAGE } = require('@/public/constant/error');
module.exports = () =>
  async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (error) {
      ctx.logger.error(error);
      const {
        // status = 200,
        code = CODE.UNKNOWN_CODES,
        message,
        data,
      } = error;
      ctx.body = {
        code,
        message: MESSAGE[code] || message || 'Internal Server Error',
        data,
      };
    }
  };
