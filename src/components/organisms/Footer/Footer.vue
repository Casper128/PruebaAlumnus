<script setup>
import { ref } from 'vue';
const currentYear = ref(new Date().getFullYear());
</script>
<template>
  <!-- Footer -->
  <footer class="sticky-footer bg-white">
    <div class="container my-auto">
      <div class="copyright text-center my-auto">
        <span>Copyright &copy; Your Website {{currentYear}}</span>
      </div>
    </div>
  </footer>
  <!-- End of Footer -->
</template>