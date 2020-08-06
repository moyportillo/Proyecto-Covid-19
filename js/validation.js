var regexSimpleText = /^[A-Za-z\s]*$/;
var regexHNDPhone = /^(\+?\(?504\)?\s?)?[13456789]\d{3}-?\d{4}$/;
var regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
var regexEmptyText = /^\s*$/;
var regexEdad = /^(0?[0-9]?[0-9]|1[0-1][0-9]|12[0-9]|13[0-9]|14[0])$/;
var regexId = /^\d{13}$/;

document.addEventListener("DOMContentLoaded", page_onload);

var txtNombre = null;
var txtNombreError = null;

var txtEmail = null;
var txtEmailError = null;

var txtPhone= null;
var txtPhoneError = null;

var txtEdad = null;
var txtEdadError = null;

var txtIdentidad = null;
var txtIdentidadError = null;

function page_onload(e) {
  //alert("Documento Cargado");
  txtNombre = document.getElementById("txtNombre");
  txtNombreError = document.getElementById("txtNombreErr");

  txtEmail = document.getElementById("txtEmail");
  txtEmailError = document.getElementById("txtEmailErr");

  txtPhone = document.getElementById("txtPhone");
  txtPhoneError = document.getElementById("txtPhoneErr");

  txtEdad = document.getElementById("intEdad");
  txtEdadError = document.getElementById("intEdadErr");  

  txtIdentidad = document.getElementById("txtIdentidad");
  txtIdentidadError = document.getElementById("txtIdentidadErr")

  txtNombre.addEventListener("change", txtNombre_onchange);
  txtNombre.addEventListener("blur", txtNombre_onchange);

  txtEmail.addEventListener("change", txtEmail_onchange);
  txtEmail.addEventListener("blur", txtEmail_onchange);

  txtPhone.addEventListener("change", txtPhone_onchange);
  txtPhone.addEventListener("blur", txtPhone_onchange);

  txtEdad.addEventListener("change", intEdad_onchange);
  txtEdad.addEventListener("blur", intEdad_onchange);

  txtIdentidad.addEventListener("change", txtIdentidad_onchange);
  txtIdentidad.addEventListener("blur", txtIdentidad_onchange);

}


function txtNombre_onchange(e){
  var txtNombreToValidate = e.target.value;
  if(regexSimpleText.test(txtNombreToValidate)){
    txtNombreError.innerHTML = "";
  } else {
    txtNombreError.innerHTML = "El nombre completo tiene caracteres raros!";
    txtNombre.focus();
  }
  if (regexEmptyText.test(txtNombreToValidate)) {
    txtNombreError.innerHTML = "El nombre es Requerido!";
    txtNombre.focus();
  } else {

  }
}

function validateForm() {
  var x = document.forms["form1"]["txtNombre"].value;
   
  if (x == "") {
    alert("El campo nombre debe ser llenado");
  }
    else{
      alert("Enviado con exito, nos comunicaremos via celular o correo con ud");
  }  
}  

function txtEmail_onchange(e) {
  var txtEmailToValidate = e.target.value;
  if (regexEmail.test(txtEmailToValidate)) {
    txtEmailError.innerHTML = "";
  } else {
    txtEmailError.innerHTML = "El correo no tiene el formato adecuado!";
    txtEmail.focus();
  }
}


function txtPhone_onchange(e){
  var txtPhoneToValidate = e.target.value;
  if(regexHNDPhone.test(txtPhoneToValidate)){
    txtPhoneError.innerHTML = "";
  } else {
    txtPhoneError.innerHTML = "El numero celular tiene caracteres raros!";
    txtPhone.focus();
  }
  if (regexEmptyText.test(txtPhoneToValidate)) {
    txtPhoneError.innerHTML = "El numero celular es requerido!";
    txtPhone.focus();
  } else {

  }
}

function intEdad_onchange(e){
  var txtEdadToValidate = e.target.value;
  if(regexEdad.test(txtEdadToValidate)){
    txtEdadError.innerHTML = "";
  } else {
    txtEdadError.innerHTML = "La edad tiene caracteres raros!";
    txtEdad.focus();
  }
  if (regexEmptyText.test(txtEdadToValidate)) {
    txtEdadError.innerHTML = "La edad es requerida!";
    txtEdad.focus();
  } else {

  }
}

function txtIdentidad_onchange(e){
  var txtIdentidadToValidate = e.target.value;
  if(regexId.test(txtIdentidadToValidate)){
    txtIdentidadError.innerHTML = "";
  } else {
    txtIdentidadError.innerHTML = "El numero de identidad tiene caracteres raros o no esta completa";
    txtIdentidad.focus();
  }
  if (regexEmptyText.test(txtIdentidadToValidate)) {
    txtIdentidadError.innerHTML = "El numero de identidad es requerido!";
    txtIdentidad.focus();
  } else {

  }
}

