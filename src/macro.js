// @flow
import fs from 'fs';
import { createMacro } from 'babel-plugin-macros';
import parse from 'csv-parse/lib/sync';
import resolveImportPath from './resolveImportPath';

function csvMacro({
  references: { loader = [] },
  state: {
    file: {
      opts: { filename },
    },
  },
}: {
  references: { loader: Array<any> },
  state: { file: { opts: { filename: string } } },
  babel: { types: Object },
}): void {
  // import { loader } from 'csv.macro'
  loader.forEach(referencePath => {
    referencePath.parentPath.node.arguments.forEach(({ value }) => {
      const absolutePath = resolveImportPath({ filename, relativePath: value });
      const csvContent = fs.readFileSync(absolutePath, 'utf8');
      const json = parse(csvContent, { columns: true, skip_empty_lines: true });
      referencePath.parentPath.replaceWithSourceString(JSON.stringify(json));
    });
  });
}

export default createMacro(csvMacro);
