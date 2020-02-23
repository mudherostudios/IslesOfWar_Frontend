module.exports = api => {
  const presets = [["@babel/preset-env", {
    "debug": false
  }],
    "@babel/preset-react"
  ];

  const productionPlugins = [
    "babel-plugin-jsx-remove-data-test-id"
  ];
  
  const plugins =
    api.env() === "production"
      ? productionPlugins
      : [];

  return {
    plugins,
    presets
  };
};