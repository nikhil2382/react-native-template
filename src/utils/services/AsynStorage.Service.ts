import AsyncStorage from '@react-native-async-storage/async-storage';

export enum AsyncStorageKeys {
  AccessToken = 'AccessToken',
}

export default class AsyncStorageService {
  public static getAsyncStorageItem(
    key: AsyncStorageKeys,
  ): Promise<string | null> {
    try {
      return AsyncStorage.getItem(key);
    } catch (e) {
      console.error(`===> getAsyncStorageItem [${key}]`, e);
      return Promise.resolve(null);
    }
  }

  public static setAsyncStorageItem<T>(
    key: AsyncStorageKeys,
    value: T,
  ): Promise<void> {
    try {
      return AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`===> setAsyncStorageItem [${key}]`, e);
      return Promise.resolve();
    }
  }

  public static removeAsyncStorageItem(key: AsyncStorageKeys): Promise<void> {
    try {
      return AsyncStorage.removeItem(key);
    } catch (e) {
      console.error(`===> removeAsyncStorageItem [${key}]`, e);
      return Promise.resolve();
    }
  }

  public static removeAsyncStorageItems(
    keys: Array<AsyncStorageKeys>,
  ): Promise<void> {
    try {
      return AsyncStorage.multiRemove(keys);
    } catch (e) {
      console.error(`===> removeAsyncStorageItems ${keys}`, e);
      return Promise.resolve();
    }
  }

  public static removeAllAsyncStorageItems(): Promise<void> {
    try {
      const keys = Object.values(AsyncStorageKeys);

      return AsyncStorage.multiRemove(keys);
    } catch (e) {
      console.error('===> removeAllAsyncStorageItems', e);
      return Promise.resolve();
    }
  }

  public static getAsyncStorageBoolean(
    key: AsyncStorageKeys,
  ): Promise<boolean | null> {
    try {
      return AsyncStorage.getItem(key).then(res => {
        if (res === null) {
          return res;
        } else {
          return res === 'true';
        }
      });
    } catch (e) {
      console.error(`===> setAsyncStorageBoolean [${key}]`, e);
      return Promise.resolve(null);
    }
  }

  public static setAsyncStorageBoolean(
    key: AsyncStorageKeys,
    value: boolean,
  ): Promise<void> {
    try {
      return AsyncStorage.setItem(key, String(value));
    } catch (e) {
      console.error(`===> setAsyncStorageBoolean [${key}]`, e);
      return Promise.resolve();
    }
  }
}
