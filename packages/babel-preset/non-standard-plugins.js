module.exports = function andrewmcodesNonStandardPlugins(options = {}) {
  const { inlineEnv = false, typescript = false } = options

  const plugins = [require.resolve("@babel/plugin-syntax-dynamic-import")]

  if (inlineEnv) {
    plugins.push(require.resolve("babel-plugin-transform-inline-environment-variables"))
  }

  if (typescript) {
    // proposal-decorators must go before proposal-class-properties.
    // Typscript implements the stage 1 version of decorators, which is the
    // "legacy" version. When decorators are used in legacy mode,
    // proposal-class-properties must be used in loose mode
    // see https://babeljs.io/docs/en/babel-plugin-proposal-decorators#note-compatibility-with-babel-plugin-proposal-class-properties
    plugins.push(
      [require.resolve("@babel/plugin-proposal-decorators"), { legacy: true }],
      [require.resolve("@babel/plugin-proposal-class-properties"), { loose: true }],
      require.resolve("@babel/plugin-proposal-numeric-separator"),
      // nullish-coalescing and optional-chaining are handled by preset-env
      // But they aren't yet supported in webpack 4 because of missing support
      // in acorn v6 (support is in acorn v7, which is used in webpack v5).
      // So we want to always transpile this synax away
      // See https://github.com/webpack/webpack/issues/10227
      // Can be removed once we drop support for webpack v4 (or these features
      // are backported to acorn v6)
      [require.resolve("@babel/plugin-proposal-nullish-coalescing-operator"), { loose: true }],
      [require.resolve("@babel/plugin-proposal-optional-chaining"), { loose: true }]
    )
  } else {
    plugins.push(require.resolve("@babel/plugin-proposal-class-properties"))
  }

  return plugins
}
