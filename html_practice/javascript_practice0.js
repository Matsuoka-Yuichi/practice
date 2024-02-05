// alert,window.innerWidth
const win_width = window.innerWidth;
alert(win_width);

// .replace
let text1 = 'リンゴ・バナナ';
let text2 = 'レモン';
let my_fruits = (text1 + text2).replace('バナナ', '');

alert(my_fruits);


const num1 = 5;
const num2 = 8;
alert(num1 + num2);


$(function(){
    $('li').on('click',function(){
      alert($(this).attr('class'));
    });
  });

setTimeout(function() {
  alert('2秒経ちました！');
}, 10000);   //10000 miliseconds

let fruits = [];
fruits.push('Apple')
fruits.push('Melon')
fruits.push('Banana')

alert(fruits[1]);

$(function(){
    alert('list2のliタグの数は' + $('.list2 li').length + '個です！');
});


