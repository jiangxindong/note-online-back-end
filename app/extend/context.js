const {
  HttpException,
  ResponseBody,
} = require('@/public/constant/response_body');
module.exports = {
  formatResp(data, code, message) {
    return new ResponseBody(data, code, message);
  },
  throwError(code, message, data) {
    throw new HttpException(code, message, data);
  },
};
