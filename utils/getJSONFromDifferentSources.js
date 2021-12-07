import { readFile } from 'fs/promises';
import { join } from 'path';
import BaseAxiosInstance from '../lib/axios/BaseAxiosInstance';

export async function getJSONFromDifferentSources( path ) {
  try {
    if (path.startsWith('http://') || path.startsWith('https://')) {
      const response = await BaseAxiosInstance.get(path);
      console.log('response', response);
      return response;
    }

    return JSON.parse(await readFile(join(process.cwd(), path), 'utf-8'));
  } catch (err) {
    return null;
  }
}
