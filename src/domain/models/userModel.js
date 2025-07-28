export class User {
  constructor(
    nombreUsuario,
    correo,
    contrasena,
    nivelLector,
    puntuacionTotal,
    rango,
    historialBusqueda,
    edad,
    generoSexual,
    generoFavoritos,
    objetivoLector,
    paginasDiarias,
    objetivoSemanal,
    id
  ) {
    this.nombreUsuario = nombreUsuario;
    this.correo = correo;
    this.contrasena = contrasena;
    this.nivelLector = nivelLector;
    this.puntuacionTotal = puntuacionTotal;
    this.rango = rango;
    this.historialBusqueda = historialBusqueda;
    this.edad = edad;
    this.generoSexual = generoSexual;
    this.generoFavoritos = generoFavoritos;
    this.objetivoLector = objetivoLector;
    this.paginasDiarias = paginasDiarias;
    this.objetivoSemanal = objetivoSemanal;
    this.id = id;
  }

  isValid() {
    return (
      this.nombreUsuario &&
      this.correo?.includes("@") &&
      this.contrasena?.length >= 6 &&
      this.nivelLector &&
      this.puntuacionTotal !== undefined &&
      this.rango &&
      Array.isArray(this.historialBusqueda) &&
      this.edad !== undefined &&
      this.generoSexual &&
      Array.isArray(this.generoFavoritos) &&
      this.objetivoLector &&
      this.paginasDiarias !== undefined &&
      this.objetivoSemanal &&
      this.id !== undefined
    );
  }

  toPayload() {
    return {
      nombreUsuario: this.nombreUsuario,
      correo: this.correo,
      contraseña: this.contrasena,
      edad: this.edad,
      generoSexual: this.generoSexual,
      generosFavoritos: this.generoFavoritos,
      nivelLector: this.nivelLector,
      objetivoLector: this.objetivoLector,
      paginasDiarias: this.paginasDiarias,
      objetivoSemanal: this.objetivoSemanal,
    };
  }
}
