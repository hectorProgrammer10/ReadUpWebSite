export class User {
  constructor(
    nombreUsuario,
    correo,
    contraseña,
    edad,
    generoSexual,
    generoFavoritos,
    nivelLector,
    objetivoLector,
    paginasDiarias,
    objetivoSemanal
  ) {
    (this.nombreUsuario = nombreUsuario),
      (this.correo = correo),
      (this.contraseña = contraseña),
      (this.edad = edad),
      (this.generoSexual = generoSexual),
      (this.generoFavoritos = generoFavoritos),
      (this.nivelLector = nivelLector),
      (this.objetivoLector = objetivoLector),
      (this.paginasDiarias = paginasDiarias),
      (this.objetivoSemanal = objetivoSemanal);
  }

  isValid() {
    return (
      this.nombreUsuario &&
      this.correo?.includes("@") &&
      this.contraseña?.length >= 6 &&
      this.edad !== undefined &&
      this.generoSexual &&
      Array.isArray(this.generoFavoritos) &&
      this.nivelLector &&
      this.objetivoLector &&
      this.paginasDiarias !== undefined &&
      this.objetivoSemanal
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
