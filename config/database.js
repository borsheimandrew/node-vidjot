if(process.env.NODE_ENV === 'production'){
  module.exports = { mongoURI: 'mongodb://andy:test123@ds347917.mlab.com:47917/vidjot-prod' }
} else {
  module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev' }
}