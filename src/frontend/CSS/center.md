# 水平垂直居中

## 已知元素宽高

```CSS
#div1{
  width:200px;
  height:200px;
  background-color:#6699FF;
  position: absolute; //父元素需要相对定位
  top: 50%;
  left: 50%;
  margin-top:-100px ; //二分之一的 height，width
  margin-left: -100px;
}
```

## 未知元素的高宽

```CSS
#div1{
  width: 200px;
  height: 200px;
  background-color: #6699FF;
  margin:auto;
  position: absolute; //父元素需要相对定位
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
```
