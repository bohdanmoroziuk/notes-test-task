/* eslint-disable no-useless-constructor */

export class IDB<T extends { id: string }> {
  static isSupported () {
    if (!('indexedDB' in window)) {
      throw new Error('This browser doesn\'t support IndexedDB')
    }
  }

  private constructor (
    private name: string,
    private connection: IDBDatabase
  ) {}

  static initialize <T extends { id: string }> (name: string, version = 1): Promise<IDB<T>> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(name, version)

      request.onerror = () => {
        reject(request.error)
      }

      request.onsuccess = () => {
        resolve(new IDB<T>(name, request.result))
      }

      request.onupgradeneeded = () => {
        request.result.createObjectStore(name, { keyPath: 'id', autoIncrement: true })
      }
    })
  }

  getItems (): Promise<T[]> {
    return new Promise((resolve, reject) => {
      const request = this.connection
        .transaction([this.name], 'readonly')
        .objectStore(this.name)
        .getAll()

      request.onerror = () => reject(request.error)

      request.onsuccess = () => resolve(request.result)
    })
  }

  getItem (itemId: T['id']): Promise<T | undefined> {
    return new Promise((resolve, reject) => {
      const request = this.connection
        .transaction([this.name], 'readonly')
        .objectStore(this.name)
        .get(itemId)

      request.onerror = () => reject(request.error)

      request.onsuccess = () => resolve(request.result)
    })
  }

  addItem (item: T): Promise<IDBValidKey> {
    return new Promise((resolve, reject) => {
      const request = this.connection
        .transaction([this.name], 'readwrite')
        .objectStore(this.name)
        .add(item)

      request.onerror = () => reject(request.error)

      request.onsuccess = () => resolve(request.result)
    })
  }

  updateItem (item: T): Promise<IDBValidKey> {
    return new Promise((resolve, reject) => {
      const request = this.connection
        .transaction([this.name], 'readwrite')
        .objectStore(this.name)
        .put(item)

      request.onerror = () => reject(request.error)

      request.onsuccess = () => resolve(request.result)
    })
  }

  deleteItem (itemId: T['id']): Promise<undefined> {
    return new Promise((resolve, reject) => {
      const request = this.connection
        .transaction([this.name], 'readwrite')
        .objectStore(this.name)
        .delete(itemId)

      request.onerror = () => reject(request.error)

      request.onsuccess = () => resolve(request.result)
    })
  }
}
