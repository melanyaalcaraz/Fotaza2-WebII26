# Fotaza

Trabajo Práctico Integrador - Programación Web II

## Descripción

Fotaza es una aplicación web para compartir fotografías entre usuarios.

La plataforma permite registrarse, iniciar sesión, publicar imágenes, comentar publicaciones, valorar fotografías, seguir usuarios y buscar contenido por título o etiquetas.


## Links:
- Link Video: https://docs.google.com/videos/d/13bnEl3JjgxoU0Zj0jbJLK50MWQlUDD_vOr4oowP28so/edit?usp=sharing
- Link Repo: https://github.com/melanyaalcaraz/Fotaza2-WebII26
- Link Render: https://fotaza-backend.onrender.com


## Funcionalidades

- Registro de usuarios
- Inicio de sesión con JWT
- Publicación de fotografías
- Título y descripción de publicaciones
- Sistema de etiquetas (#)
- Búsqueda por título
- Búsqueda por etiquetas
- Comentarios en publicaciones
- Valoración de imágenes
- Seguimiento de usuarios
- Visualización de publicaciones de usuarios seguidos

## Tecnologías utilizadas

### Backend

- Node.js
- Express
- MySQL
- JWT (JSON Web Token)
- Multer
- Bcrypt

### Frontend

- Pug
- HTML
- CSS
- JavaScript

### Infraestructura

- Render (Backend)
- AlwaysData (Base de Datos MySQL)
- GitHub (Control de versiones)

---

# Instalación

## 1. Clonar el repositorio

```bash
git clone https://github.com/melanyaalcaraz/Fotaza2-WebII26.git
```

## 2. Ingresar al proyecto

```bash
cd Fotaza2-WebII26
```

## 3. Instalar dependencias

```bash
npm install
```

## 4. Configurar variables de entorno

Crear un archivo `.env` tomando como referencia `.env.example`

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=fotaza

JWT_SECRET=tu_clave_jwt
```

## 5. Restaurar la base de datos

Importar el archivo:

```txt
fotaza.sql
```

en MySQL.

## 6. Ejecutar la aplicación

```bash
npm start
```

La aplicación quedará disponible en:

```txt
http://localhost:3000
```

---

# Aplicación en producción

Backend desplegado en Render:

```txt
https://fotaza-backend.onrender.com
```

---

# Estructura del proyecto

```txt
controllers/
models/
routes/
views/
public/
uploads/
app.js
```

---

# Usuarios de prueba

## Usuario 1

Email:

```txt
ana@email.com
```

Contraseña:
```txt
test1
```

## Usuario 2

Email:

```txt
julian@email.com
```

Contraseña:

```txt
test1
```

---

# Base de datos

La base de datos fue desarrollada en MySQL.

Principales tablas:

- usuarios
- fotos
- comentarios
- valoraciones
- seguidores
- etiquetas
- foto_etiqueta

---

# Autor

Melany Alcaraz

Trabajo Práctico Integrador

Programación Web II - 2026
