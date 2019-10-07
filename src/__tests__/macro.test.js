// @flow

import pluginTester from 'babel-plugin-tester';
import plugin from 'babel-plugin-macros';
import fs from 'fs';
import path from 'path';

expect.addSnapshotSerializer({
  print(val) {
    return val.replace(/..\/macro/, 'csv.macro');
  },
  test(val) {
    return typeof val === 'string';
  },
});

pluginTester({
  plugin,
  snapshot: true,
  babelOptions: {
    filename: __filename,
  },
  tests: {
    '[loader] with data': {
      error: false,
      code: `
        import { loader } from '../macro';
        const jsonData = loader('./fixtures/data.csv');
      `,
    },
    '[loader] with absolute path': {
      error: false,
      code: `
        import { loader } from '../macro';
        const jsonData = loader('src/__tests__/fixtures/data.csv');
      `,
    },
    '[loader] with absolute path and NODE_PATH': {
      error: false,
      code: `
        import { loader } from '../macro';
        const jsonData = loader('__tests__/fixtures/data.csv');
      `,
      setup: () => {
        process.env.NODE_PATH = 'src/';
      },
    },
    '[loader] with absolute path and jsconfig include property': {
      error: false,
      code: `
        import { loader } from '../macro';
        const jsonData = loader('__tests__/fixtures/data.csv');
      `,
      setup: () => {
        fs.symlinkSync(
          'src/__tests__/fixtures/jsconfig.json',
          path.resolve(fs.realpathSync(process.cwd()), 'jsconfig.json'),
          'file',
        );
      },
      teardown: () => {
        fs.unlinkSync(
          path.resolve(fs.realpathSync(process.cwd()), 'jsconfig.json'),
        );
      },
    },
    '[loader] should work with relative path': {
      error: false,
      code: `
        import { loader } from '../macro';
        const jsonData = loader('../__tests__/fixtures/data.csv');
      `,
    },
  },
});
