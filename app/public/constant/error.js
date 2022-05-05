const CODE = {
  SUCCESS: 200,
  UNKNOWN_ERROR: -1,
  HAS_USER: 401,
};
const MESSAGE = {
  [CODE.SUCCESS]: 'success',
  [CODE.UNKNOWN_ERROR]: 'unknown error',
  [CODE.HAS_USER]: 'username exists',
};
module.exports = {
  MESSAGE,
  CODE,
};
