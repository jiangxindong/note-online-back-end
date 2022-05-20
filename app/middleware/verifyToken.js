const { CODE } = require('@/public/constant/error');
const writeList = new Set(['/auth/login', '/auth/register']);

module.exports = options =>
  async function validToken(ctx, next) {
    const token = ctx.request.header.authorization;
    if (writeList.has(ctx.path)) {
      await next();
    } else {
      if (token) {
        try {
          ctx.app.jwt.verify(token, options.secret);
          await next();
        } catch (error) {
          if (error.name === 'TokenExpiredError') {
            ctx.throwError(CODE.EXPIRED_TOKEN);
          }
          // other error
          ctx.throwError(error.code || CODE.OTHER_ERROR, error.message);
        }
      } else {
        ctx.throwError(CODE.NO_TOKEN);
      }
    }
  };
