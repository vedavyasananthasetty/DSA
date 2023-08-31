const submitButton = document.getElementById('submitButton');

function onClickFunction() {
  let result
  const Number = document.getElementById('number').value;
  const option = document.getElementById('temp').value
  if (!Number){
    alert("No Temperature has been recorded")
  } else if(option==='tf'){
    result=((Number) * (9/5)) + 32
  } else result=((Number) - 32) * (5/9) 
  alert ('The Converted value is:'+result)
}

submitButton.onclick = onClickFunction;