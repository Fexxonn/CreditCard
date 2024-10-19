const numeroInput = document.getElementById("inputnumtarjeta");
const numeroTarjeta = document.getElementById("numerotarjeta");

const setNumeroTarjeta = () => {
  let numberText = parseInt(numeroInput.value.replace(/ /g, ""));

  if (isNaN(numberText)) {
    numberText = "";
  }

  if (numeroInput.value == "") {
    numeroTarjeta.textContent = "#### #### #### ####";
    return;
  }

  const result = String(numberText).replace(/([0-9]{4})/g, "$1 ");

  numeroInput.value = result;
  numeroTarjeta.textContent = result;
};

numeroInput.addEventListener("keyup", setNumeroTarjeta);

// ############################################################################
// ############################################################################
// ############################################################################

const nombrecompleto = document.getElementById("nombrecompleto");
const inputnombrecompleto = document.getElementById("inputnombrecompleto");

const setNombreTarjeta = () => {
  let nameText = inputnombrecompleto.value.replace(/[0-9]/g, "");
console.log(nameText);


  if (nameText == "") {
    nombrecompleto.textContent = "Nombre";
    return;
  }

  const resultText = String(nameText).replace(/[0-9]/g, "");

  inputnombrecompleto.value = resultText;

  nombrecompleto.textContent = resultText;
};

inputnombrecompleto.addEventListener("keyup", setNombreTarjeta);

// ############################################################################
// ############################################################################
// ############################################################################

const fechaexpiracion = document.getElementById("fechaexpiracion");
const expiracion = document.getElementById("expiracion");

const setFechaExpiracion = () => {
  let InputExpiracion = expiracion.value;


  if (InputExpiracion == "") {
    fechaexpiracion.textContent = "###";
    return;
  }

  fechaexpiracion.textContent = InputExpiracion;
};

expiracion.addEventListener("change", setFechaExpiracion);

// ############################################################################
// ############################################################################
// ############################################################################

const ccv = document.getElementById("ccv");
const inputccv = document.getElementById("inputccv");

const setCCV = () => {
  let ccvText = String(inputccv.value).slice(0, 3);

  inputccv.value = ccvText;
  ccv.textContent = ccvText;
};

inputccv.addEventListener("keyup", setCCV);

const toggleFormulario = () => {
  document.getElementById("form").classList.toggle("hidden");
};

document.getElementById("Btn").addEventListener("click", () => {
  const nombre = inputnombrecompleto.value;
  const numero = numeroInput.value;
  const Fecha = expiracion.value;
  const CCVAlert = inputccv.value;

  if (
    nombre != "" &&
    numero != "" &&
    numero.length === 20 &&
    Fecha != "" &&
    CCVAlert != "" &&
    CCVAlert.length === 3
  ) {
    alert(
      `nombre completo: ${nombre}\nnumero de tarjeta: ${numero}\nFecha de expiracion: ${Fecha}\nCVV: ${CCVAlert}`
    );
  } else {
    alert("Completa todo");
  }
});
