import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import * as path from 'path';

export default defineConfig({
                              define:  {
                                global: {},
                              },
                              resolve: {
                                alias: {
                                  '@features': path.resolve(__dirname, './src/app/@features'),
                                  '@widgets': path.resolve(__dirname, './src/app/@widgets'),
                                  '@services': path.resolve(__dirname, './src/app/@services'),
                                  '@junction': path.resolve(__dirname, './src/app/@junction'),
                                  '@core': path.resolve(__dirname, './src/app/@core'),
                                },
                              },
                              plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
                            });

