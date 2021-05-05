<template>
  <div class="flex flex-col items-center justify-center text-3xl lg:mt-10 lg:p-10 sm:mt-0 sm:p-4">
    <div class="mb-5 border-b border-gray-200 sm:w-full lg:w-3/6">
      <search-field></search-field>
    </div>
 
    <div class="w-3/9">
      <images-output></images-output>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchField from '@/components/SearchField'
import ImagesOutput from '@/components/ImagesOutput'

export default {
  name: 'Home',
  components: {
    SearchField,
    ImagesOutput
  }
}
</script>
