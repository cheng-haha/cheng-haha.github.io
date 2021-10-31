/*
 * @Author: your name
 * @Date: 2021-10-31 14:59:53
 * @LastEditTime: 2021-10-31 19:09:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \html\mozilla\test\scripts\main.js
 */
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
// 将一个匿名函数赋值给了onclick属性
// document.querySelector( 'html').onclick = function(){
//     alert('别戳我我怕疼')
// }
var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc == "images/Firefox_logo.png") {
        myImage.setAttribute('src', 'images/firefox.png');
    } else {
        myImage.setAttribute('src', "images/Firefox_logo.png");
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

//如果遇到输入值为空的话，就重头开始运行该程序
function setUserName() {

    var myName = prompt('请输入你的名字：');
    if (!myName || myName == null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla简直酷毙了!' + myName;
    }

}

// 当页面首次读取的时候，询问用户名字,并把用户名字存储到游览器缓存当中
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedname = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla简直酷毙了!' + storedname;
}

// 为按钮按下事件定制反馈事件
myButton.onclick = function () {
    setUserName();
}