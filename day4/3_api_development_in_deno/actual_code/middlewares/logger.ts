export function logger(req, res, next) {
  console.log(req.url);
  next();
}
