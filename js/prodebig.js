function changeimg() {
  var bigimg =  document.getElementById("bigimg");
  bigimg.src = event.srcElement.src;
}
/*��ʾָ��id�ı�ǩ*/
function displayobj(id) {
  var obj = document.getElementById(id);
  obj.style.display = "";
}
/*����ָ��id�ı�ǩ*/
function hiddenobj() {
  var obj = document.getElementById("imgDiv");
  obj.style.display = "none";
}
/*��ʼ���Ŵ�ͼƬ*/
function Minidiv() {
  var obj1 = document.getElementById("targetimg");
  var obj2 = document.getElementById(event.srcElement.id);
  obj1.src = obj2.src;
}
function Mmove() {
  displayobj("imgDiv");
  Minidiv();
  //��ȡ�Ŵ�ͼƬ����
  var obj = document.getElementById("targetimg");
  var offx = obj.width/event.srcElement.width;
  var offy = obj.height/event.srcElement.height;
  //��ȡ�Ŵ�div����
  var div = document.getElementById("imgDiv");
  //������������������
  div.scrollLeft = (event.offsetX*offx);
  div.scrollTop = (event.offsetY*offy);
}
/*��ʾָ��id���ѡ�����*/
function showdivbox(number) {
   for(var i = 1;i <= 5 ;i++){
      if(i==number){
         var obj = document.getElementById("info"+number);
         obj.style.display = "";
        }else{
        var obj = document.getElementById("info"+i);
        obj.style.display = "none";
        }
   }
}