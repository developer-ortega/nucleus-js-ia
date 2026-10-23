# Nucleus — Asistente de IA

Aplicación web para hacer consultas a un modelo de inteligencia artificial y ver la respuesta en tiempo real, escrita palabra por palabra mientras se genera (streaming), como en ChatGPT. Está hecha con JavaScript vanilla (sin framework), Vite y el AI SDK de Vercel conectado a OpenRouter.

Proyecto realizado como parte de un curso de IA con JavaScript (Udemy), como práctica para mi portafolio.

## Funcionalidades

- Formulario de consulta con validación (no permite enviar consultas vacías)
- Respuesta en **streaming**: el texto aparece a medida que el modelo lo genera
- Botón de envío que se deshabilita mientras se genera la respuesta
- Uso de modelos gratuitos de OpenRouter, intercambiables cambiando una línea de código
- Parámetros del modelo configurables en el código, como el comportamiento (`system`) y la creatividad (`temperature`)
- Interfaz oscura y responsiva con Tailwind CSS

## Stack técnico

- **JavaScript vanilla** (ES modules)
- **Vite** como bundler y servidor de desarrollo
- **Vercel AI SDK** (`ai`) con `streamText` para el streaming de respuestas
- **OpenRouter** (`@openrouter/ai-sdk-provider`) como proveedor de modelos
- **Tailwind CSS 4** para los estilos

## Cómo correrlo localmente

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/developer-ortega/nucleus-js-ia.git
   cd nucleus-js-ia
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Crear una API key en [OpenRouter](https://openrouter.ai/) (crearla es gratis; conviene ponerle un límite de crédito y una fecha de vencimiento).

4. Crear un archivo `.env` en la raíz (usar `.env.example` como referencia):
   ```
   VITE_OPENROUTER_KEY=tu_api_key
   ```

5. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Cambiar el modelo

En `src/main.js` se elige el modelo con `openrouter('nombre-del-modelo')`. Los modelos con sufijo `:free` no consumen crédito, pero tienen límites de uso diarios y su disponibilidad cambia con el tiempo, así que si uno falla, prueba con otro de la [lista de OpenRouter](https://openrouter.ai/models).

## Nota de seguridad

Este proyecto es una práctica y llama a OpenRouter **directo desde el navegador**, por lo que la API key queda expuesta en el cliente. Por eso no está desplegado en línea. Para una versión pública, la llamada a la IA tendría que hacerse desde un servidor (por ejemplo, una función serverless) que guarde la key como variable de entorno, sin enviarla nunca al navegador.

## Estructura del proyecto

```
├── index.html        # Estructura de la página
├── src/
│   ├── main.js       # Lógica: formulario, llamada al modelo y streaming
│   └── style.css     # Importa Tailwind
├── .env.example      # Ejemplo de variables de entorno
└── vite.config.ts    # Configuración de Vite + Tailwind
```
