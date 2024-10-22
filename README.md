# VENTAS FRONTEND

## Tecnologia

- **Angular 15**
- **TypeScript**
- **Bootstrap 5**
- **RxJS**
- **JWT (JSON Web Token)**

## Instalación

### 1. Clonar el Repositorio

Clona el repositorio del proyecto en tu máquina local:

```bash
git clone <URL_DEL_REPOSITORIO>
cd ventas_frontend
```

### 2. Instalar Dependencias

Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego, instala las dependencias necesarias utilizando npm:

```bash
npm install
```

### 3. Ejecutar la Aplicación

Para iniciar el servidor de desarrollo, utiliza el siguiente comando:

```bash
npm run start
```

## Configuración de Variables de Entorno

Modificar el archivo `environment.ts` en la carpeta `src/environments/` y configura las variables necesarias:

```typescript
export const environment = {
  production: false,
  url_api: 'http://localhost:8000/api', // URL de la API ventas_backend
};
```

### Descripción de Variables

- **`url_api`**: URL de la API del backend donde se realizarán las solicitudes.

> **Importante**: Asegúrate de manejar las variables sensibles adecuadamente y no exponerlas en repositorios públicos.
