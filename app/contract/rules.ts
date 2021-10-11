const userRules = require('./rules/userRule');
const friendsRules = require('./rules/friendsRule')
module.exports = {
    ...userRules,
    ...friendsRules

}