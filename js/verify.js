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
        required: "�������û���",
        minlength: "�û���������������ĸ���"
      },
      pwd:{
        required: "����������",
        minlength: "���볤�Ȳ���С�� 4 ����ĸ"
      },
      repwd:{
        required: "���ٴ���������",
        minlength: "���볤�Ȳ���С�� 4 ����ĸ",
        equalTo: "�����������벻һ��"
      },
      email:{
        email: "������@qq.comΪ��׺������"
      },
      question:{
        required: "�����������ܱ�����"
      },
      answer:{
        required: "�������ܱ���"
      },
      checkbox:{
        required: "��ѡ��ͬ��Э��"
      }
    }

  });
});