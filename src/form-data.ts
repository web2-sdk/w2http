import { ssrSafeWindow } from './ssr';


export function formData(): typeof FormData {
  if(ssrSafeWindow
    && typeof ssrSafeWindow.FormData !== 'undefined'
    && !!FormData) return ssrSafeWindow.FormData;  

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return require('form-data') as typeof FormData;
}

export default formData;