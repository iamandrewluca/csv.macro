type StringValuesObject = { [key: string]: string }
export function loader<T extends StringValuesObject = any>(filePath: string): T[];
