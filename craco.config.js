/* craco.config.js */
const path = require(`path`);
const CracoLessPlugin = require("craco-less");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@Components": path.resolve(__dirname, "src/components"),
      "@Assets": path.resolve(__dirname, "src/assets"),
      "@Routes": path.resolve(__dirname, "src/routes"),
      "@Services": path.resolve(__dirname, "src/services"),
      "@Store": path.resolve(__dirname, "src/store"),
      "@Utils": path.resolve(__dirname, "src/utils"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#90278e",
              "@secondary-color": "#c7158c",
              "@text-color-primary": "#e1e1e1",
              "@text-color-secondary": "#4B4B4B",
              "@success-color": "#51D76F",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

// https://ant.design/docs/react/customize-theme#Ant-Design-Less-variables
