import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Degree } from '@/api/types'
import getDegrees from '@/api/getDegrees'

export const useDegreeStore = defineStore('degrees', () => {
  const degrees = ref<Degree[]>([])

  const FETCH_DEGREES = async () => {
    const recivedDegrees = await getDegrees()
    degrees.value = recivedDegrees
  }

  const UNIQUE_DEGREES = computed(() => degrees.value.map((degree) => degree.degree))

  return { degrees, FETCH_DEGREES, UNIQUE_DEGREES }
})
