function changeimg() {
  var bigimg =  document.getElementById("bigimg");
  bigimg.src = event.srcElement.src;
}
/*显示指定id的标签*/
function displayobj(id) {
  var obj = document.getElementById(id);
  obj.style.display = "";
}
/*隐藏指定id的标签*/
function hiddenobj() {
  var obj = document.getElementById("imgDiv");
  obj.style.display = "none";
}
/*初始化放大镜图片*/
function Minidiv() {
  var obj1 = document.getElementById("targetimg");
  var obj2 = document.getElementById(event.srcElement.id);
  obj1.src = obj2.src;
}
function Mmove() {
  displayobj("imgDiv");
  Minidiv();
  //获取放大镜图片对象
  var obj = document.getElementById("targetimg");
  var offx = obj.width/event.srcElement.width;
  var offy = obj.height/event.srcElement.height;
  //获取放大镜div对象
  var div = document.getElementById("imgDiv");
  //重新设置容器滚动条
  div.scrollLeft = (event.offsetX*offx);
  div.scrollTop = (event.offsetY*offy);
}
/*显示指定id大的选项卡容器*/
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