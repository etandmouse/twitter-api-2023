const followshipServices = require('../../services/followship-services')

const followshipController = {
  addFollowing: (req, res, next) => {
    followshipServices.addFollowing(req, (err, data) => err ? next(err) : res.json(data))
  },
  removeFollowing: (req, res, next) => {
    followshipServices.removeFollowing(req, (err, data) => err ? next(err) : res.json(data))
  }
}
module.exports = followshipController
