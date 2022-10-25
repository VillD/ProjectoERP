import {ref} from 'vue'

const useCounter = ()=>{
    const count = ref(5)

    function increment() {
        return count.value++
    }
    return count, increment()
}

export default useCounter