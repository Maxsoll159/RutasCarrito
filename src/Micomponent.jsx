import { SegundoComponente } from "./SegundoComponente";
import { HookUseState } from "./components/HookUseState";
export const Micomponent = () => {
  const miNombre = "Martin";
  const personajes = {
    id: 1,
    nombre: "Tony Stark",
    alias: "Iroman",
  };
  const nombre2 = "Pepe Lucho";

  //PROPS
  return (
    <>
      <HookUseState />
      {/*
          <SegundoComponente nombre={miNombre} personajes={personajes}  />
      <h1>Hola</h1>
      <h2>Juan</h2>
      <SegundoComponente nombre={nombre2} personajes={personajes} />
    */}
    </>
  );
};
