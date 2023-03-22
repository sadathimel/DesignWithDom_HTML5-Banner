const elements = {
    1: document.querySelector('.element_1'),
    2: document.querySelector('.element_2'),
    3: document.querySelector('.element_3'),
    4: document.querySelector('.element_4'),
    5: document.querySelector('.element_5'),
    6: document.querySelector('.element_6'),
    7: document.querySelector('.element_7'),
    8: document.querySelector('.element_8'),
    9: document.querySelector('.element_9'),
    10: document.querySelector('.element_10'),
    11: document.querySelector('.element_11'),
    s1: document.querySelector('.slide_1'),
    s2: document.querySelector('.slide_2'), 
    s3: document.querySelector('.slide_3'), 
    s4: document.querySelector('.slide_4'),  
  };


  elements[2].addEventListener('click', function() {
    gsap.to(elements.s1, {opacity: 0, display: 'none'});
    gsap.to(elements.s2, {opacity: 1, display: 'block'})
  });

  elements[5].addEventListener('click', function() {
    gsap.to(elements.s2, {opacity: 0, duration: 0.5});
    gsap.to(elements.s3, {display: 'block', opacity: 1, duration: 0.5, delay: 0.5});
    
  
      var property1 = document.querySelector('.slide_2 .property1');
      var property2 = document.querySelector('.slide_2 .property2');
      var zakat = document.querySelector('.slide_3 .zakat');
      
      var total = (Number(property1.value) + Number(property2.value));
      var res = total * (1 / 40);
      zakat.innerText = total > 23000 ? Math.round(res) : 0;
    
  });
  
  elements[9].addEventListener('click', function() {
    gsap.to(elements.s3, {opacity: 0, display: 'none'})
    gsap.to(elements.s4, {display: 'block'})
  });