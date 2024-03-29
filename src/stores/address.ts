import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export interface AddressItem {
    id: string;
    name: string;
    tel: string;
    address: string;
    province: string;
    city: string;
    county: string;
    addressDetail: string;
  }
  

export const useCounterStore = defineStore('counter', () => {
  
  const chosenAddressId = ref('')
  


})
