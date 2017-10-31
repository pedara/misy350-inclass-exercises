function main (){
  //all code should be here
  //document.getElementById('google').innerHTML = "Google";
  $('#google').html('Google');
  //let links = document.getElementByClassName('my-link');
  let links = $('.my-link');
  links[0].innerHTML= "Twitter";
  links[0].href = "http://www.twitter.com";
  links[1].innerHTML= "LinkedIn";
  links[1].href= "http://linkedin.com";
  links[1].style.color= "red";

//button click event
  $('#heading-button').click(function () {
    $('h1').css('color','red');
    $('.my-link').hide();
  });

// toggle button clicked
  $('toggle-button').click(function(){
    $('.my-link').toggle();
  });

//hide and show text
  $('#main-text').hide();
  $('#main-text').fadeIn(5000);

//hide projects
  $('.projects').hide();

//show projects
  $('.project-button').click(function(){
    $(this).next().slideToggle(500);
  });
}

$(document).ready(main);
