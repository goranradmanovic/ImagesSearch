<template>
    <div class="w-full p-3">
        <div class="relative">
            <input type="text" placeholder="Example Term: Star Wars" class="bg-white h-14 w-full px-16 text-xl rounded-lg focus:outline-none hover:cursor-pointer" v-model="serachTerm" @keyup="getAllImages">
            <span class="absolute top-2 right-5 border-l pl-4">
                <font-awesome-icon v-if="serachTerm == ''" icon="search" class="text-yellow-500 hover:text-yellow-600 cursor-pointer"/>
                <font-awesome-icon v-else icon="times" @click="clearTerm" class="text-yellow-500 hover:text-yellow-600 cursor-pointer"/>
            </span>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { bus } from '@/main'

export default {
    name: 'SearchField',
    data() {
        return {
            serachTerm: '',
            debounce: null
        }
    },
    methods: {
        ...mapActions(['getImages']),

        getAllImages() {
            if (this.serachTerm.length > 3) {
                clearTimeout(this.debounce)
                this.debounce = setTimeout(() => {
                    this.getImages(this.serachTerm)
                }, 500)
            }
        },

        clearTerm() {
            this.serachTerm = ''
            bus.$emit('clear-search')
        }
    }
}
</script>