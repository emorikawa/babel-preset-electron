module.exports = {
  plugins: [
    // es2015
    // require("babel-plugin-transform-es2015-template-literals"),
    // require("babel-plugin-transform-es2015-literals"),
    // require("babel-plugin-transform-es2015-function-name"),
    // require("babel-plugin-transform-es2015-arrow-functions"),
    // require("babel-plugin-transform-es2015-block-scoped-functions"),
    // require("babel-plugin-transform-es2015-classes"),
    // require("babel-plugin-transform-es2015-object-super"),
    // require("babel-plugin-transform-es2015-shorthand-properties"),
    // require("babel-plugin-transform-es2015-duplicate-keys"),
    // require("babel-plugin-transform-es2015-computed-properties"),
    // require("babel-plugin-transform-es2015-for-of"),
    // require("babel-plugin-transform-es2015-sticky-regex"),
    // require("babel-plugin-transform-es2015-unicode-regex"),
    // require("babel-plugin-check-es2015-constants"),
    // require("babel-plugin-transform-es2015-spread"),
    // require("babel-plugin-transform-es2015-parameters"),
    // require("babel-plugin-transform-es2015-block-scoping"),
    // require("babel-plugin-transform-es2015-typeof-symbol"),
    // [require("babel-plugin-transform-regenerator"), { async: false, asyncGenerators: false }],

    // es2015 not yet implemented:
    require("babel-plugin-transform-es2015-modules-commonjs"),
    // The following is still required because babel does not properly
    // recognize when spreads are being used inside of object
    // destructuring (ES7).
    require("babel-plugin-transform-es2015-destructuring"),

    // Stage 3
    require("babel-plugin-transform-async-to-generator"),
    require("babel-plugin-transform-async-generator-functions"),
    require("babel-plugin-transform-exponentiation-operator"),

    // Stage 2
    require("babel-plugin-syntax-trailing-function-commas"),
    require("babel-plugin-transform-object-rest-spread"),

    // Stage 1
    require("babel-plugin-transform-class-constructor-call"),
    require("babel-plugin-transform-class-properties"),
    require("babel-plugin-transform-decorators"),
    require("babel-plugin-transform-export-extensions"),

    // Stage 0
    require("babel-plugin-transform-do-expressions"),
    require("babel-plugin-transform-function-bind"),
  ]
};
