const { CODE, MESSAGE } = require('@/public/constant/error');
class ResponseBody {
  constructor(data, code, message) {
    this.data = data;
    this.code = code || CODE.SUCCESS;
    this.message = message || MESSAGE[CODE.SUCCESS];
  }
}
class HttpException extends Error {
  constructor(code, message, data) {
    super();
    this.data = data;
    this.code = code;
    this.message = message;
  }
}
module.exports = {
  ResponseBody,
  HttpException,
};
