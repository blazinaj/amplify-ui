import {v4 as uuidFunc} from 'uuid';

export const generateId = () => {
  return uuidFunc();
}