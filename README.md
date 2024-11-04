# strapi-plugin-webp-converter

A plugin for [Strapi](https://github.com/strapi/strapi) that automatically converts uploaded images to the WebP format using the [sharp](https://sharp.pixelplumbing.com/api-output#webp) library. It ensures that your images are optimized for web performance by leveraging the benefits of the WebP format.

### Supported Strapi versions

- v5.x.x

**NOTE**: Strapi 4.x.x is not supported!

## Installation

```sh
npm install strapi-plugin-webp-converter
```

**or**

```sh
yarn add strapi-plugin-webp-converter
```

## Configuration

### Enable the plugin

The plugin configuration is stored in a config file located at `./config/plugins.js|ts`.

Javascript configuration

```javascript
module.exports = ({ env }) => ({
  // ...
  'webp-converter': {
    enabled: true,
    config: {
      // mimeTypes that converts to WebP. Default is ['image/png', 'image/jpeg', 'image/jpg']
      mimeTypes: undefined,
      options: {
        // WebP options: https://sharp.pixelplumbing.com/api-output#webp
      },
    },
  },
});
```

**or**

Typescript configuration
```typescript
export default () => ({
  // ...
  'webp-converter': {
    enabled: true,
    config: {
      // mimeTypes that converts to WebP. Default is ['image/png', 'image/jpeg', 'image/jpg']
      mimeTypes: undefined,
      options: {
        // WebP options: https://sharp.pixelplumbing.com/api-output#webp
      },
    },
  },
});
```
