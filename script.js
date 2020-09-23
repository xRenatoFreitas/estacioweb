function mostre(num) {
  document.form.visor.value = document.form.visor.value + num;
}

function apagar() {
  var visor = document.form.visor.value;
  document.form.visor.value = visor.substring(0, visor.length - 1);
}

function limpar() {
  document.form.visor.value = "";
}

function igual() {
  var resultado = document.form.visor.value;
  if (resultado) {
    document.form.visor.value = eval(resultado);
  }
}
