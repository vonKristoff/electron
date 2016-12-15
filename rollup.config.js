import Commonjs from 'rollup-plugin-commonjs'
import Resolve from 'rollup-plugin-node-resolve'
import Stringify from 'rollup-plugin-string'
import Babel from 'rollup-plugin-babel'

export default {
    entry: 'js/main.js',
    format: 'iife',
    dest: 'bundle.js',
    moduleName: 'matchSorter',    
    plugins: [
        Resolve({
            jsnext: true,
            main: true,
        }),
        Commonjs({
            include: 'node_modules/**',
        }),
        Stringify({ include: 'js/templates/*.html' }),
        Babel()
    ]
}
