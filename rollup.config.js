import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'
import * as pkg from './package.json'

const isProduction = process.env.BUILD === 'production'

export default {
  input: 'src/index.js',

  plugins: [
    resolve(),
    babel(),
    isProduction && uglify()
  ],

  output: {
    file: pkg.main,
    format: 'umd', // amd, cjs, es, iife, umd
    name: (() =>
      pkg.name.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('')
    )()
  }
}
