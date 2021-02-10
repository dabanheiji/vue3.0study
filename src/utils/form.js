const loginForm = [
    {
        label:"用户",
        prop:"username",
        placeholder:"请输入用户名",
        component:'input'
    },
    {
        label:"密码",
        prop:"password",
        placeholder:"请输入密码",
        showPassword:true,
        component:'input'
    }
]

const wtiteBlogForm = [
    {
        label:"标题",
        prop:"blog_title",
        placeholder:"请输入标题",
        component:'input'
    },
    {
        label:"内容",
        prop:"blog_content",
        placeholder:"请输入文章内容",
        type:'textarea',
        component:'editor'
    }
]

export {
    loginForm,
    wtiteBlogForm
}