var hamburgerBtn = null;
var menu = null;
var move = null;
var isMenuHidden = true;

var validEspacios = /^[\s]{1}[\s\d\D]*$/;
var validLetras = /^[^0]{1}[a-zA-Z ]*$/;
var validInter = /^[\d]*$/;
var validDouble = /^[\d]{1,9}[.]{0,1}[0-9]{0,2}$/;

document.addEventListener("DOMContentLoaded", page_load);

var txtNombre = null;
var txtNombreError = null;
var txtCantidad = null;
var txtCantidadError = null; 
var txtEfectivo = null;
var txtEfectivoError = null;
var txtColaboracion = null;
var txtColaboracionError = null;
var txtOtros = null;
var txtOtrosError = null;

function page_load(e){
    hamburgerBtn = document.querySelector("header nav section");
    menu = document.querySelector("header nav ul");
    hamburgerBtn.addEventListener("click", hamburguer_clicked);

    txtNombre = document.getElementById("txtNombre");
    txtNombreError = document.getElementById("nameError");
    txtCantidad = document.getElementById("txtCantidad");
    txtCantidadError = document.getElementById("personError");
    txtEfectivo = document.getElementById("txtEfectivo");
    txtEfectivoError = document.getElementById("efectivoError");
    txtColaboracion = document.getElementById("txtColaboradores");
    txtColaboracionError = document.getElementById("colaboracionError");
    txtOtros = document.getElementById("txtOtros");
    txtOtrosError = document.getElementById("otrosError");

    txtNombre.addEventListener("change", txtNombre_onchange);
    txtNombre.addEventListener("blur", txtNombre_onchange);
    txtCantidad.addEventListener("change", txtCantidad_onchange);
    txtCantidad.addEventListener("blur", txtCantidad_onchange);
    txtEfectivo.addEventListener("change", txtEfectivo_onchange);
    txtEfectivo.addEventListener("blur", txtEfectivo_onchange);
    txtColaboracion.addEventListener("change", txtColaboracion_onchange);
    txtColaboracion.addEventListener("blur", txtColaboracion_onchange);
    txtOtros.addEventListener("change", txtOtros_onchange);
    txtOtros.addEventListener("blur", txtOtros_onchange);
}

function hamburguer_clicked(e){
    e.preventDefault();
    e.stopPropagation();
    if(isMenuHidden){
        menu.className = "";
    }
    else{
        menu.className = "hidden";
        hamburgerBtn.className = "hamburguer move-menu";
    }
    isMenuHidden = !isMenuHidden;
 }

 function txtNombre_onchange(e){
     var txtNombreToValidate = e.target.value;
     if(txtNombreToValidate==0){
         txtNombreError.innerHTML = "*No se Permite Campo Vacio";
         txtNombre.focus();
     }
     else{
         txtNombreError.innerHTML = "";
        if(validEspacios.test(txtNombreToValidate)){
            txtNombreError.innerHTML = "*Hay espacios en la entrada.";
            txtNombre.focus();
        }
        else{
            txtNombreError.innerHTML = "";
            if(validLetras.test(txtNombreToValidate)){
                txtNombreError.innerHTML = "";
            }
            else{
                txtNombreError.innerHTML = "*Solo se Aceptan letras.";
                txtNombre.focus();
            }
        }
    }
    
}

function txtCantidad_onchange(e){
    var txtCantidadToValidate = e.target.value;

    if(!validInter.test(txtCantidadToValidate)){
        txtCantidadError.innerHTML = "Solo Numeros Enteros.";
        txtCantidad.focus();
    }
    else{
        txtCantidadError.innerHTML = "";
        if(txtCantidadToValidate > 0 && txtCantidadToValidate < 51){
            txtCantidadError.innerHTML = "";
        }
        else{
            txtCantidadError.innerHTML = "Solo numeros entre 1 a 50";
            txtCantidad.focus();
        }
    }
}

function txtEfectivo_onchange(e){
    var txtEfectivoToValidate = e.target.value;

    if(txtEfectivoToValidate == 0){
        txtEfectivoError.innerHTML = "Campo Requerido."
        txtEfectivo.focus();
    }
    else{
        if(!validDouble.test(txtEfectivoToValidate)){
            txtEfectivoError.innerHTML = "No es un numero real.";
            txtEfectivo.focus();
        }
        else{
            txtEfectivoError.innerHTML = "";
            if(txtEfectivoToValidate > 49 && txtEfectivoToValidate < 999999999){
                txtEfectivoError.innerHTML = "";
            }
            else{
                txtEfectivoError.innerHTML = "Salario entre 50 a 999999999";
            }
        }
    }

    
}

function txtColaboracion_onchange(e){
    var txtColaboracionToValidate = e.target.value;

    if(!validDouble.test(txtColaboracionToValidate)){
        txtColaboracionError.innerHTML = "No es un numero real.";
        txtColaboracion.focus();
    }
    else{
        txtColaboracionError.innerHTML = "";
        if(txtColaboracionToValidate >= 0 && txtColaboracionToValidate < 999999999){
            txtColaboracionError.innerHTML = "";
        }
        else{
            txtColaboracionError.innerHTML = "El dato tiene que ser mayor a 0";
        }
    }
}

function txtOtros_onchange(e){
    var txtOtrosToValidate = e.target.value;

    if(!validDouble.test(txtOtrosToValidate)){
        txtOtrosError.innerHTML = "No es un numero real.";
        txtOtros.focus();
    }
    else{
        txtOtrosError.innerHTML = "";
        if(txtOtrosToValidate >= 0 && txtOtrosToValidate < 999999999){
            txtOtrosError.innerHTML = "";
        }
        else{
            txtOtrosError.innerHTML = "El dato tiene que ser mayor a 0";
        }
    }
}
    
        $('#btnCalcular').click(function(e){
            e.preventDefault();
            e.stopPropagation();
            $("form").hide("0.5s");
            $(".row").hide("0.5s");
            $(".show").hide("0.5s");
            $(".hide").show("slow");
            $(function(){
                var efectivo = $("#txtEfectivo").val();
            var colaboradores = $("#txtColaboradores").val();
            var otros = $("#txtOtros").val();

            var servicios = $("#txtServicio").val();
            var cable = $("#txtCable").val();
            var alimento = $("#txtAlimentos").val();
            var deudas = $("#txtDeudas").val();
            var alquiler = $("#txtAlquiler").val();
            var salud = $("#txtSalud").val();
            var gas = $("#txtCombustible").val();
            var educacion = $("#txtEducacion").val();
            var gastos = $("#txtGastos").val();
            var resultado = parseFloat(efectivo) + parseFloat(colaboradores) + parseFloat(otros);
            $("#totalActivo").text("Lps. " +resultado.toFixed(2));  

            var resultado2 = parseFloat(servicios) + parseFloat(cable) + parseFloat(alimento) + parseFloat(deudas) + parseFloat(alquiler) + parseFloat(salud) + parseFloat(gas) + parseFloat(educacion) + parseFloat(gastos);
            $("#totalPasivo").text("Lps. " +resultado2.toFixed(2));  
            
            var Total = resultado + resultado2;
            var porcentajeActivo = (resultado * 100) / Total;
            var porcentajePasivo = (resultado2 * 100) / Total;
            $("#porcentaje_Activo").text(porcentajeActivo.toFixed(2)+ "%");
            $("#porcentaje_Pasivo").text(porcentajePasivo.toFixed(2)+ "%");

            var resultante = resultado - resultado2;
            $("#resultante").text("Lps. " +resultante.toFixed(2));
            if(resultante > 0){
                $("#utilidad").text("Esta es la UTILIDAD resultante, lo cual podremos ahorrar para el siguiente mes o invertirlo para poder generar mas efectivo de entrada.");
            }
            else{
                $("#utilidad").text("El resultante es una PERDIDA de efectivo, lo cual muestra que sus deudas son mayores que los ingresos de efectivos. Favor Revisar la sección de CONSEJO para poder economizar sus fluidos de efectivos");
            }
            if(porcentajeActivo > 60){
                $("#exprecion").text("Excelente");
                $("#mensaje").text("Entradas: Las entradas son excelentes por que sobre pasa  mas del 60% de los ingresos, Las salidas son menores de los 50% y hace que sea sostenible los gastos del hogar. Mantenga siempre utilidades para poder ahorrar.");
            }else if(porcentajeActivo < 60 && porcentajeActivo > 50){
                $("#exprecion").text("Aceptable");
                $("#mensaje").text("Entradas: Las entradas estan algo sostenibles, se mantiene en un margen del 50% pero es necesario mejorar las entradas de efectivo: Las salidas son menores de los 50% y hace que sea sostenible los gastos del hogar.");
            }
            else{
                $("#exprecion").text("No Aceptable");
                $("#mensaje").text("La parte de la deuda o pasivos es mayor y esto hace que tengamos perdidas y no podamos sostener las salidas, necesitamos hacer un plan de levantamiento economia para poder siempre mantener utilidades al final del mes.");
            }
            $('html, body').animate({
                scrollTop: $(".contact").offset().top
                }, 2000);
            });
        });
        
        $("#btnRefresh").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            $('html, body').animate({
                scrollTop: $(".contact").offset().top
                }, 2000);
            $(".hide").hide("slow");
            $("form").show("slow");
            $(".row").show("slow");
            $(".show").show("slow");
            $("form")[0].reset();
        });