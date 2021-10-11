import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

    /**
     * sayHi to you
     * @param name - your name
     */
    public async getFriends(username: string) {
        const { ctx } = this;
        // console.log(ctx.model)
        //查询用户好友关联表
        const friends = await ctx.model.UserFriends.findAll({
            where: {
                username,
            },
            attributes: { exclude: ['username', 'deleted_at', "created_at", "updated_at"] },
            // paranoid: false //关闭后，查询到所有的软删除的之前的操作
        })
        // console.log(friends)
        if (friends) {
            //改造返回参数
            const data:any[] = [];
            for (let item of friends) {
                const friendName = item.friend;
                const res = await ctx.model.Users.findAll({
                    where: {
                        username: friendName,
                    },
                    attributes: { exclude: ['deleted_at', "created_at", "updated_at", 'password'] },
                })
                data.push(res[0]);
            }
            return {
                username,
                friends: data
            }
        }else{
            return null;
        }
    }
}
