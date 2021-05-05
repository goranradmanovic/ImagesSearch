<template>
    <div class="fixed z-10 inset-0 overflow-y-auto" :class="{ 'hidden': !active }" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div class="inline-block align-bottom bg-white rounded-md text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full lg:w-1/2">
            
                <div class="p-3 text-right">
                    <button type="button" @click="closeModal" class="mt-3 w-full inline-flex justify-center border-0 px-4 py-2 bg-white text-base font-medium text-gray-700 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        <font-awesome-icon icon="times" class="text-yellow-500 hover:text-yellow-600"/>
                    </button>
                </div>
                
                <div class="bg-white p-3">
                    <img :src="imageUrl" alt="Full image"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { bus } from '@/main'

export default {
    name: 'Modal',
    data() {
        return {
            active: false,
            imageUrl: ''
        }
    },
    mounted() {
        this.openModal()
    },
    methods: {
        closeModal() {
            this.active = false
        },
        openModal() {
            bus.$on('open-modal', (payload) => {
                this.imageUrl = payload.imgUrl
                this.active = payload.isOpen
            })
        }
    }
}
</script>
