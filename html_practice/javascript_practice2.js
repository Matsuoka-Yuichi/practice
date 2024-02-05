$(function(){
    alert('横幅は' + $('.box').width() + '縦幅は' + $('.box').height() + 'です！');
  });

  $(function(){
    $('#color-change').on("change", function(){
      let select_color = $(this).val();
      $('.title').css('color', select_color);
    });
  });

  $(function(){
    let max_li = 0;
    $('li').each(function(index, el) { // index:index of the selected li element. el:selected element
      if( max_li < $(el).height() ){
        max_li = $(el).height();
      }
    });
    $('li').height(max_li);
  });

  $(function(){
    $('li').on('click',function(){    
    alert($(this).index()+1) // $('li').index(this) would account for all <li> elements in the html not just siblings
      });
  });

  $(function(){
    $('#birthday').on("change", function(){
      let selectedDate = $(this).val();
      const bday = 2005/1/31
      if(selectedDate == bday){
        $('h1').fadeIn("slow");
      }
    });
  });


