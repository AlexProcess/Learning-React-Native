export const TiposBasicos = () => {
  let nombre: string | number = "Fernando";
  let edad: number = 35;
  const estaActivo: boolean = true;

  const poderes: string[] = [];
  //    "Velocidad", "Volar", "Respirar en el agua"

  //   poderes.push(1);
  //   poderes.push("123");
  //   poderes.push(true);

  return (
    <>
      <h3> Tipos básicos</h3>
      {nombre}, {edad}, {estaActivo ? "activo" : "no activo"}
      <br />
      {poderes.join(", ")}
    </>
  );
};
