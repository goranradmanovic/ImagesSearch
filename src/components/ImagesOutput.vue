<template>
    <div>
        <modal />

        <loader v-if="getIsLoader" />

        <div v-if="isAllImagesSet" class="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div v-for="(item, index) in getAllImages" :key="index" 
                class="max-w-auto rounded overflow-hidden shadow-lg bg-white"
                :class="{'col-span-2': index % 5 === 0, 'col-span-1': index % 2 !== 0 }">
                <img @click="openImageModal(item.largeImageURL)" class="w-full cursor-pointer object-cover" :class="{'h-3/4': index % 2 !== 0 }" :src="item.webformatURL" alt="Api image">
                <div class="px-6 py-2">
                    <div class="font-bold text-xl mb-2">Photo number {{ index + 1 }}</div>
                </div>
                <div class="px-6 pt-2 pb-2">
                    <span v-for="(tag, index) in item.tags.split(',')" :key="index" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{ tag }}</span>
                </div>
            </div>
        </div>
        <div v-if="!isAllImagesSet && !getIsLoader">
            <h1 class="text-4xl">There is no images</h1>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Loader from '@/components/Loader'
import Modal from '@/components/Modal'
import { bus } from '@/main'

export default {
    name: 'ImagesOutput',
    components: {
        Loader,
        Modal
    },
    computed: {
        ...mapGetters(['getAllImages', 'getIsLoader']),

        isAllImagesSet() {
            return (this.getAllImages && this.getAllImages.length) ? true : false
        }
    },
    mounted() {
        this.clearImageSearch()
    },
    methods: {

        ...mapActions(['clearAllImages']),

        openImageModal(imgURL) {
            bus.$emit('open-modal', {imgUrl: imgURL, isOpen: true})
        },

        clearImageSearch() {
            bus.$on('clear-search', () => {
                this.clearAllImages()
            })
        }
    }
}
</script>