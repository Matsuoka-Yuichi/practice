// setTimeout(function() {
//     alert('2秒経ちました！');
//   }, 10000);   //10000 miliseconds

//   let fruits = [];
// fruits.push('Apple')
// fruits.push('Melon')
// fruits.push('Banana')

// alert(fruits[1]);

// // .replace
// let text1 = 'リンゴ・バナナ';
// let text2 = 'レモン';
// let my_fruits = (text1 + text2).replace('バナナ', '');

// alert(my_fruits);

// const num1 = 5;
// const num2 = 8;
// alert(num1 + num2);

// alert,window.innerWidth
const win_width = window.innerWidth;
alert(win_width);

//.length
$(function(){
    alert('liタグの数は' + $('li').length + '個です！');
  });

//addClass
  $(function() {
    $('p').addClass('is-active');
  })  

//removeClass
setTimeout(function() {
    $('p').removeClass('blue');
  }, 10000); //10000 miliseconds

//toggleClass  
$(function() {
    $('p').click(function() {
      $(this).toggleClass('is-active');
    });
  })  

  $(function(){
    $('li').on('click',function(){
      alert($(this).attr('class'));
    });
  });  

  $(function(){
    $('li').on('click',function(){
        $('.test').prepend('<li>新しい果物</li>');
    });
  });  

  $(function(){
    $('li').on('click',function(){
        $('.test').append('<li>古い果物</li>');
    });
  });  

  $(function() {
    $('.test').after(
      '<div class="target">' +
      '<p>ダミーテキストF</p>' +
      '<p>ダミーテキストG</p>' +
      '<p>ダミーテキストH</p>' +
      '<p>ダミーテキストI</p>' +
      '<p>ダミーテキストJ</p>' +
      '</div>'
    );
  })

//   $(function(){
//     $('.trigger').on('click',function(){
//         $('.target').show();
//     });
//   });  

  $(function() {
    $('.trigger').click(function() {
      $('.target').fadeIn("slow"); //.fadeOut  argument....in miliseconds
    });
  })

  $(document).ready(function(){
    // Check if the div has the class 'active'
    if($("#myDiv").hasClass("active")) {
        $("#myParagraph").show(); // Show the paragraph if the div has the class 'active'
    } else {
        $("#myParagraph").hide(); // Hide the paragraph if the div does not have the class 'active'
    }

    $(document).ready(function(){
        $("#toggleButton").click(function(){
            $("#contentToToggle").toggle(); // This toggles the visibility
        });
    });
    
});