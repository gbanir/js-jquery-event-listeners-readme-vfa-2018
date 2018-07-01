function pressIt () { 
  $('form').on('keydown', function (key)
  {if(key.which==71) {
    alert('You have pressed they "g" key!'); 
  }
  }); 
  return; 
} 

function getIt () { 
  $('p').on('click', function(click)
  { alert('Hey!'); 
  } 
  ); 
  return; 
  } 
  
  function submitIt () { 
    $("form").on("submit", function(submit)
    { alert("Your form is going to be submitted now."); 
    }); 
    return; 
  } 
  
  function frameIt () { 
    $('img').on('load', function(load)
    { if($('img').class=="tasty") { 
    'img'.style.borderColor="red"; 
    }
    }); 
    return; 
    } 
  


