import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  setLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }


  getLocalStorage(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  updateLocalStorage(key: string, newValue: any) {
    const currentValue = this.getLocalStorage(key);
    if (currentValue) {
      const updatedValue = { ...currentValue, ...newValue };
      this.setLocalStorage(key, updatedValue);
    }
  }
}
