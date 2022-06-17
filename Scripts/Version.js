/* eslint-disable operator-assignment */
/* eslint linebreak-style: ["error", "windows"] */
const texto = document.getElementById('version');
const Actual = new Date();
const Birth = new Date('2003-12-08');

const ObtenerTiempo = () => {
  let edadAnios = Actual.getFullYear() - Birth.getFullYear();
  let ActualMes = Actual.getMonth() + 1;
  /* let edadMes = (Birth.getMonth() - ActualMes) + 1;
  let edadDia = Actual.getDate() - Birth.getDate(); */
  if (!(Actual.getMonth + 1 === 12) && !(Actual.getDate >= 8)) { edadAnios = edadAnios - 1; }
  if (Actual.getDate < 8) { ActualMes -= ActualMes; }
  /* return `${edadAnios}.${ActualMes}.${edadDia}` */
  return `v${edadAnios}.${ActualMes}`;
};
ObtenerTiempo();
const dato = ObtenerTiempo();
texto.innerText = dato;
