module.exports = {
  database_url: process.env.DATABASE_URL,
  jwt_secret: process.env.JWT_SECRET,
  node_env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
};