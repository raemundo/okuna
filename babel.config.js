module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "@expo/next-adapter/babel",
    ],

    "plugins": [
      ['@babel/plugin-proposal-class-properties'],
      ["module-resolver", {
        root: ["."],
        alias: {
         "@": "./",
         "~": "./src",
        }
      }]
    ],
  };
};
