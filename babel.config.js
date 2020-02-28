module.exports = api => {
  const presets = [["@babel/preset-env", {
    "debug": false
  }],
    "@babel/preset-react"
  ];

  const common = [
    "babel-plugin-styled-components"
  ];

  const productionPlugins = [
    "babel-plugin-jsx-remove-data-test-id"
  ];
  
  const plugins =
    api.env() === "production"
      ? [...common, ...productionPlugins]
      : [...common];

  return {
    plugins,
    presets
  };
};