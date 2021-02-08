import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
    input: './dist/es2020/app.js',
    output: {
        file: './dist/public/app.js',
        format: 'iife',
        name: 'App'
    },
    plugins: [
        resolve(),
        terser({
            output: { comments: false }
        })
    ]
}