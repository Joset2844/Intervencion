# Registro de Intervenciones

## 1. Firebase
1. Crea el proyecto en https://console.firebase.google.com si no lo tienes.
2. Authentication → Sign-in method → activa **Correo electrónico/contraseña**.
3. Authentication → Users → crea manualmente un usuario por cada técnico (tú decides quién entra).
4. Firestore Database → crear base de datos (modo producción). Pestaña **Reglas** → pega el contenido de `firestore.rules` → Publicar.
5. Storage → Comenzar (modo producción). Pestaña **Reglas** → pega el contenido de `storage.rules` → Publicar.
6. Para dar rol de administrador a un técnico: Firestore → colección `roles` → documento con **ID = su UID** (lo copias desde Authentication → Users) → campo `isAdmin` (boolean) = `true`.
7. Configuración del proyecto → General → tus apps → añade una app Web (`</>`) → copia el objeto `firebaseConfig`.
8. Pega ese objeto en `index.html`, reemplazando el bloque `firebaseConfig` de ejemplo.

## 2. Iconos (opcional pero recomendado)
Sube dos imágenes cuadradas `icon-192.png` (192x192) y `icon-512.png` (512x512) a la raíz del repo — el `manifest.json` ya las referencia. Sin ellas, la app se instala igual pero con un icono genérico.

## 3. GitHub Pages
1. Crea un repositorio nuevo en GitHub y sube estos archivos (`index.html`, `manifest.json`, `sw.js`, íconos) a la raíz — puedes hacerlo desde el navegador con "Add file → Upload files", sin necesidad de PC ni terminal.
2. En el repo: **Settings → Pages → Branch: main / (root)** → Save.
3. En unos minutos tu web estará en `https://tu-usuario.github.io/tu-repo/`.
4. En Firebase: **Authentication → Settings → Authorized domains** → añade `tu-usuario.github.io`.

## 4. Instalar en el teléfono
Abre la URL de GitHub Pages en Chrome (Android) o Safari (iPhone) → menú del navegador → "Añadir a pantalla de inicio". Queda como una app normal, con icono propio.

## Notas
- El historial es de solo-creación: un técnico no puede editar ni borrar un registro ya guardado, solo un administrador (definido por ti en la colección `roles`).
- Los archivos `firestore.rules` y `storage.rules` son de referencia — la copia que manda es la que está publicada en la consola de Firebase.
- El objeto `firebaseConfig` no es un secreto (las reglas de seguridad son la protección real), así que no hay problema en que quede visible en el repo público.
