require("dotenv").config();

module.exports = {
  redis: {
    url: process.env.REDIS_URL,
  },

 jwt: {
    secret: process.env.JWT_SECRET,
    expired: process.env.EXPIRED_MINUTE, // dalam menit
  },

}