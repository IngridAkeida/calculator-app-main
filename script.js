function calc(type, specificValue) {


  if(type === 'action'){

    if(specificValue === 'DEL' || specificValue === 'RESET'){
      document.getElementById('result').value = '';
    }

    if (specificValue ==='+'|| 
        specificValue ==='-'|| 
        specificValue ==='x'||
        specificValue ==='/'||
        specificValue ==='.') {
        
          document.getElementById('result').value += specificValue;
    }

    if (specificValue === '=') {
      let field = eval(document.getElementById('result').value);

      document.getElementById('result').value = field;
    }
  } else if (type === 'value') {
    document.getElementById('result').value += specificValue;
  }
}