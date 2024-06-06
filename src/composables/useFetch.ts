import { onMounted, ref } from 'vue'

const useFetch = <TData>(url: string) => {
  const data = ref<TData | null>(null)
  const loading = ref<boolean>(false)

  const getData = async () => {
    loading.value = true
    const response = await fetch(url)
    data.value = await response.json()
    loading.value = false
  }

  onMounted(() => {
    getData()
  })

  return { data, loading }
}

export default useFetch
