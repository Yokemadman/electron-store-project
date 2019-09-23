$(function () {
  $("#Form").validate({
    rules:{
      username:{
        required: true,
        minlength: 2
      },
      pwd:{
        required: true,
        minlength: 4
      },
      repwd:{
        required: true,
        minlength: 4,
        equalTo:"#cpwd"
      },
      email:{
        required: true,
        email:true
      },
      question:{
        required: true
      },
      answer:{
        required: true
      },
      checkbox:{
        required: true
      }
    },
    messages:{
      username: {
        required: "请输入用户名",
        minlength: "用户名必需由两个字母组成"
      },
      pwd:{
        required: "请输入密码",
        minlength: "密码长度不能小于 4 个字母"
      },
      repwd:{
        required: "请再次输入密码",
        minlength: "密码长度不能小于 4 个字母",
        equalTo: "两次密码输入不一致"
      },
      email:{
        email: "请输入@qq.com为后缀的邮箱"
      },
      question:{
        required: "请输入您的密保问题"
      },
      answer:{
        required: "请输入密保答案"
      },
      checkbox:{
        required: "请选中同意协议"
      }
    }

  });
});