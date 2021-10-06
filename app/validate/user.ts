//自定义规则
module.exports = app => {
    let { validator } = app;

    // 校验用户名是否正确
    validator.addRule('username', (rule, value) => {
        console.log(rule, value);
        // if (/^\d+$/.test(value)) {
        //     return "用户名应该是字符串";
        // }
        if (value.length < 3 || value.length > 10) {
            throw new Error("用户名的长度应该在3-10之间");
        }
    })
}