
//第一步
import React from "react";
import ReactDOM from "react-dom";

// 注意:这里的@符号,表示 项目根目录中的src 这一层目录
import Hello from "@/component/hello"
import  "@/06-class关键字使用"
import  "@/07-class使用static创建静态属性"
import  "@/08-class的继承"
import  "@/09-class子类继承父类的方法"


const dog={
  name:"大黄",
  age:18,
  genter:"男"
}
ReactDOM.render(
<div>
  111
 < Hello {...dog} ></Hello>
</div>,
document.getElementById('app'))


