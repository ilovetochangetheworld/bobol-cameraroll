module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "bobol-cameraroll": "./js/CameraRoll.js"
        },
        cwd: "babelrc"
      }
    ]
  ]
};
