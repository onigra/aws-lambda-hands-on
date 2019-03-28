exports.handler = async event => {
  return event.message;
};

// 上記はこのコードと同じ
// exports.handler = (event, context, callback) => {
//   callback(null, event.message);
// };
