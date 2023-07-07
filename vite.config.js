import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
export default {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                creation: resolve(__dirname, 'src/html/creationCharacter.html'),
                single: resolve(__dirname, 'src/html/singleCharacter.html'),
                edit: resolve(__dirname, 'src/html/editCharacter.html'),
            }
        }
    }
}