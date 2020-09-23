module.exports = {
  root: true,
  env: {
    node: true
  },
  globals:{
    ActiveXObject:true,
    
    '_':true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "indent": ["warn", 2],
    "semi": ["warn", "always"],
    "comma-dangle": ["warn", "never"],
    "eqeqeq": ["warn", "always"],
    "quotes": ["warn", "single"],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
