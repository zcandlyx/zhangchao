module.exports = {  
  root: true,  
  env: {  
    node: true,  
  },  
  extends: [  
    'plugin:vue/essential',  
    'eslint:recommended',  
    '@vue/prettier',  
  ],  
  parserOptions: {  
    ecmaVersion: 2021,  
  },  
  rules: {  
    // 在这里添加自定义的规则，或者覆盖默认的规则  
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',  
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',  
  },  
};