(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
  
    buttons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        let value = e.target.dataset.num;
        screen.value += value;
      });
    });
  
    equal.addEventListener('click', function(e) {
      if (screen.value === 'undefine') {
        screen.value = "Please Enter";
      } else {
        try {
          let expression = screen.value;
          let result = evalExpression(expression);
          screen.value = result;
        } catch (error) {
          screen.value = "Error: " + error.message;
        }
      }
    });
  
    clear.addEventListener('click', function(e) {
      screen.value = "";
    });
  
    function evalExpression(expression) {
      let sanitizedExpression = expression.replace(/[^\d+\-*/.%]/g, '');
      return eval(sanitizedExpression);
    }
  })();
