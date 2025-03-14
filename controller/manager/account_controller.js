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
  if (account.role != "manager"){
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


module.exports.addUserController = async (req, res) => {
  try {
      const { userID, name, phone_number, address, password, email, role } = req.body;
      
      const existingUser = await User.findOne({ $or: [{ email }, { userID }] });
      if (existingUser) {
          return res.status(400).json({ message: "UserID hoặc Email đã tồn tại." });
      }

      const hashedPassword = md5(password);

      const newUser = new User({
          userID,
          name,
          phone_number,
          address,
          password: hashedPassword,
          email,
          role
      });

      await newUser.save();

      res.status(201).json({ message: "User đã được tạo thành công!", user: newUser });
  } catch (error) {
      res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};



module.exports.getAllUserController = async (req, res) => {
  try {
      const users = await User.find().select("-password");
      
      res.json({ code: "success", msg: "Lấy danh sách Users thành công", users });
  } catch (error) {
      console.error(error);
      res.status(500).json({ code: "error", msg: "Đã xảy ra lỗi khi lấy danh sách người dùng" });
  }
};



module.exports.getUserByIDController = async (req, res) => {
  try {
      const user = await User.find({
        userID: req.query.userID
      }).sort({
        updatedAt: 1,
      });
  
      res.json({
        code: "success",
        msg: "Lấy User thành công",
        user,
      });
    } catch (error) {
      res.status(500).json({
        code: "error",
        msg: "Đã xảy ra lỗi khi lấy thông tin người dùng",
      });
    }    
}


module.exports.deleteUserController = async (req, res) => {
  try {
      const { userID } = req.query; 

      const user = await User.findOneAndDelete({ userID });
      if (!user) {
          return res.status(404).json({ code: "error", msg: "User không tồn tại" });
      }

      res.json({ code: "success", msg: "User đã được xóa thành công", user });
  } catch (error) {
      console.error(error);
      res.status(500).json({ code: "error", msg: "Đã xảy ra lỗi khi xóa user" });
  }
};

