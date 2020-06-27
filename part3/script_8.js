let login = 'Employee';
let message = (login == 'Employee') ? 'Welcome' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);



//solution:  by adding welcome condition in employe login