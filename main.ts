import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function preguntar(p: string): Promise<string> {
  return new Promise(resolve => rl.question(p, resolve));
}

async function main() {

  console.log("===== SISTEMAS CON CLASES ABSTRACTAS =====");

  // ========= EJERCICIO 1 =========
  abstract class Animal {
    abstract hacerSonido(): void;
  }

  class Perro extends Animal {
    hacerSonido() { console.log("El perro ladra 🐶"); }
  }

  class Gato extends Animal {
    hacerSonido() { console.log("El gato maúlla 🐱"); }
  }

  class Vaca extends Animal {
    hacerSonido() { console.log("La vaca muge 🐮"); }
  }

  const animal = await preguntar("Animal (perro/gato/vaca): ");

  let a: Animal;

  if (animal === "perro") a = new Perro();
  else if (animal === "gato") a = new Gato();
  else a = new Vaca();

  a.hacerSonido();

  // ========= EJERCICIO 2 =========
  abstract class Vehiculo {
    abstract mover(): void;
  }

  class Carro extends Vehiculo {
    mover() { console.log("El carro se mueve por la carretera 🚗"); }
  }

  class Bicicleta extends Vehiculo {
    mover() { console.log("La bicicleta avanza pedaleando 🚴"); }
  }

  class Motocicleta extends Vehiculo {
    mover() { console.log("La motocicleta acelera 🏍️"); }
  }

  const v = await preguntar("Vehículo (carro/bicicleta/moto): ");

  let veh: Vehiculo;

  if (v === "carro") veh = new Carro();
  else if (v === "bicicleta") veh = new Bicicleta();
  else veh = new Motocicleta();

  veh.mover();

  // ========= EJERCICIO 3 =========
  abstract class Figura {
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;
  }

  class Cuadrado extends Figura {
    constructor(private lado: number) { super(); }
    calcularArea() { return this.lado * this.lado; }
    calcularPerimetro() { return this.lado * 4; }
  }

  class Rectangulo extends Figura {
    constructor(private base: number, private altura: number) { super(); }
    calcularArea() { return this.base * this.altura; }
    calcularPerimetro() { return 2 * (this.base + this.altura); }
  }

  class Circulo extends Figura {
    constructor(private radio: number) { super(); }
    calcularArea() { return Math.PI * this.radio ** 2; }
    calcularPerimetro() { return 2 * Math.PI * this.radio; }
  }

  const f = await preguntar("Figura (cuadrado/rectangulo/circulo): ");

  let fig: Figura;

  if (f === "cuadrado") {
    const lado = parseFloat(await preguntar("Lado: "));
    fig = new Cuadrado(lado);
  } else if (f === "rectangulo") {
    const b = parseFloat(await preguntar("Base: "));
    const h = parseFloat(await preguntar("Altura: "));
    fig = new Rectangulo(b, h);
  } else {
    const r = parseFloat(await preguntar("Radio: "));
    fig = new Circulo(r);
  }

  console.log("Área:", fig.calcularArea());
  console.log("Perímetro:", fig.calcularPerimetro());

  // ========= EJERCICIO 4 =========
  abstract class Empleado {
    abstract calcularSalario(): number;
  }

  class PorHoras extends Empleado {
    constructor(private horas: number, private pago: number) { super(); }
    calcularSalario() { return this.horas * this.pago; }
  }

  class Fijo extends Empleado {
    constructor(private salario: number) { super(); }
    calcularSalario() { return this.salario; }
  }

  class Comision extends Empleado {
    constructor(private ventas: number, private porcentaje: number) { super(); }
    calcularSalario() { return this.ventas * this.porcentaje; }
  }

  const t = await preguntar("Empleado (horas/fijo/comision): ");

  let emp: Empleado;

  if (t === "horas") {
    const h = parseFloat(await preguntar("Horas: "));
    const p = parseFloat(await preguntar("Pago por hora: "));
    emp = new PorHoras(h, p);
  } else if (t === "fijo") {
    const s = parseFloat(await preguntar("Salario fijo: "));
    emp = new Fijo(s);
  } else {
    const vta = parseFloat(await preguntar("Ventas: "));
    const pct = parseFloat(await preguntar("Porcentaje (ej 0.1): "));
    emp = new Comision(vta, pct);
  }

  console.log("Salario:", emp.calcularSalario());

  // ========= EJERCICIO 5 =========
  abstract class Pago {
    abstract procesarPago(): void;
  }

  class Efectivo extends Pago {
    procesarPago() { console.log("Pago en efectivo realizado 💵"); }
  }

  class Tarjeta extends Pago {
    procesarPago() { console.log("Pago con tarjeta aprobado 💳"); }
  }

  class Transferencia extends Pago {
    procesarPago() { console.log("Transferencia bancaria exitosa 🏦"); }
  }

  const p = await preguntar("Pago (efectivo/tarjeta/transferencia): ");

  let pago: Pago;

  if (p === "efectivo") pago = new Efectivo();
  else if (p === "tarjeta") pago = new Tarjeta();
  else pago = new Transferencia();

  pago.procesarPago();

  // ========= EJERCICIO 6 =========
  abstract class Notificacion {
    abstract enviar(): void;
  }

  class Email extends Notificacion {
    enviar() { console.log("Email enviado 📧"); }
  }

  class SMS extends Notificacion {
    enviar() { console.log("SMS enviado 📱"); }
  }

  class WhatsApp extends Notificacion {
    enviar() { console.log("Mensaje de WhatsApp enviado 🟢"); }
  }

  const n = await preguntar("Notificación (email/sms/whatsapp): ");

  let noti: Notificacion;

  if (n === "email") noti = new Email();
  else if (n === "sms") noti = new SMS();
  else noti = new WhatsApp();

  noti.enviar();

  // ========= EJERCICIO 7 =========
  abstract class Transporte {
    abstract calcularCosto(dist: number): number;
  }

  class Taxi extends Transporte {
    calcularCosto(d: number) { return d * 1.5; }
  }

  class Bus extends Transporte {
    calcularCosto(d: number) { return d * 0.5; }
  }

  class Uber extends Transporte {
    calcularCosto(d: number) { return d * 2; }
  }

  const tr = await preguntar("Transporte (taxi/bus/uber): ");
  const dist = parseFloat(await preguntar("Distancia km: "));

  let trans: Transporte;

  if (tr === "taxi") trans = new Taxi();
  else if (tr === "bus") trans = new Bus();
  else trans = new Uber();

  console.log("Costo:", trans.calcularCosto(dist));

  // ========= EJERCICIO 8 =========
  abstract class Producto {
    constructor(protected precio: number) {}
    abstract calcularPrecioFinal(): number;
    abstract mostrarInformacion(): void;
  }

  class Electronico extends Producto {
    calcularPrecioFinal() { return this.precio * 1.13; }
    mostrarInformacion() { console.log("Producto electrónico"); }
  }

  class Ropa extends Producto {
    calcularPrecioFinal() { return this.precio * 0.9; }
    mostrarInformacion() { console.log("Prenda de ropa"); }
  }

  class Alimento extends Producto {
    calcularPrecioFinal() { return this.precio * 1.05; }
    mostrarInformacion() { console.log("Producto alimenticio"); }
  }

  const pr = await preguntar("Producto (electronico/ropa/alimento): ");
  const precio = parseFloat(await preguntar("Precio base: "));

  let prod: Producto;

  if (pr === "electronico") prod = new Electronico(precio);
  else if (pr === "ropa") prod = new Ropa(precio);
  else prod = new Alimento(precio);

  prod.mostrarInformacion();
  console.log("Precio final:", prod.calcularPrecioFinal());

  rl.close();
}

main();



