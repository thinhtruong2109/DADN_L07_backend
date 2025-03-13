const User = require("../../model/User")
const jwt = require('jsonwebtoken');
const md5 = require("md5");
require('dotenv').config();
const secret = process.env.JWT_SECRET; 


module.exports.loginController = async (req, res) => {
  const userAgent = req.headers['user-agent'];
  if(!userAgent){
    res.json({
      "code": "error",
      "msg": "Không có user-agent"
    })
    return
  }
  const email = req.body.email
  const password = req.body.password
  const account = await User.findOne({
    email: email
  })

  console.log(account)
  if(!email){
    res.json({
      code: "email khong ton tai"
    })
    return
  }
  if(!account){
    res.json({
      code: "account khong ton tai"
    })
    return
  }
  if (account.role != "customer"){
    res.json({
      code: "Role không tồn tại"
    })
    return
  }
  if(md5(password) != account.password){
    res.json({
      code: "mat khau khong chinh xac"
    })
    return
  }
  const token = jwt.sign(
  {
    accountToken: {
      "id": account.id,
      "userID": account.userID,
      "email": account.email,
      "role": account.role,
      "key": md5(userAgent)
    }
  }, secret, { expiresIn: '30m' });
  const rftoken = jwt.sign(
  {
    token: token,
    id: account.id
  }, secret, { expiresIn: '168h' });
  res.json({
    code: "success",
    role: account.role,
    token: token,
    rftoken: rftoken
  })
}
