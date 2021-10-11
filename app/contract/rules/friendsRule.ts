const friendsRule = {
    getFriendsRule: {
        username: {
            type: 'string',
            required: true,
            min: 2,
            max: 60,
            trim: true,
            example: 'Imfdj',
            description: '用户名',
        },
    },
}
module.exports = {
    ...friendsRule,

}