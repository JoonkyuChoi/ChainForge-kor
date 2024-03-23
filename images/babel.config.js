return {
  presets: ["babel-preset-expo"],
  plugins: [
    "react-native-paper/babel",
    "transform-inline-environment-variables",
  ],
  env: {
    designonly: {
      plugins: [
        ["react-refresh/babel", { skipEnvCheck: true }],
        [
          "module-resolver",
          {
            root: ["."],
            extensions: [
              ".ios.js",
              ".android.js",
              ".js",
              ".ts",
              ".tsx",
              ".json",
            ],
            alias: {
              "@": "./src/components",
              utils: "./src/utils",
              sdk: "example mock",
            },
          },
        ],
      ],
    },
    development: {
      plugins: [
        [
          "module-resolver",
          {
            root: ["."],
            extensions: [
              ".ios.js",
              ".android.js",
              ".js",
              ".ts",
              ".tsx",
              ".json",
            ],
            alias: {
              "@": "./src/components",
              utils: "./src/utils",
              sdk: "example real development",
            },
          },
        ],
      ],
    },
    production: {
      plugins: [
        [
          "module-resolver",
          {
            root: ["."],
            extensions: [
              ".ios.js",
              ".android.js",
              ".js",
              ".ts",
              ".tsx",
              ".json",
            ],
            alias: {
              "@": "./src/components",
              utils: "./src/utils",
              sdk: "example real minified",
            },
          },
        ],
      ],
    },
  },
};
