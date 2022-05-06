const CODE = {
  SUCCESS: 200000,
  UNKNOWN_ERROR: -1,
  EXISTED_USERNAME: 400001,
  NOT_EXISTED_USERNAME: 400002,
  WRONG_PASSWORD: 400003,
  NO_TOKEN: 400004,
  EXPIRED_TOKEN: 400005,
};
const MESSAGE = {
  [CODE.SUCCESS]: 'success',
  [CODE.UNKNOWN_ERROR]: 'unknown error',
  [CODE.EXISTED_USERNAME]: 'username exists',
  [CODE.NOT_EXISTED_USERNAME]: 'username does not exist',
  [CODE.WRONG_PASSWORD]: 'wrong password',
  [CODE.NO_TOKEN]: 'no token',
  [CODE.EXPIRED_TOKEN]: 'expired token',
};
module.exports = {
  MESSAGE,
  CODE,
};
