<script setup>
import { ref, onMounted } from 'vue';
import Header from '../components/organisms/Header/Header.vue';
import Footer from '../components/organisms/Footer/Footer.vue';
import Sidebar from '../components/organisms/Sidebar/Sidebar.vue';
import DataTable from '../components/organisms/Datatable/Datatable.vue';
import draw1 from '../assets/undraw_profile.svg';
import draw2 from '../assets/undraw_profile_1.svg';
import draw3 from '../assets/undraw_profile_2.svg';
import draw4 from '../assets/undraw_profile_3.svg';

import { useFetchComposable } from '../composables/fetch-composable.js';

const users = ref([]);
const error = ref(null);
const loading = ref(true);

const fetchData = async () => {
    const response = await useFetchComposable('https://jsonplaceholder.typicode.com/users');
    users.value = response.data;
    error.value = response.error;
    loading.value = response.loading;
};

onMounted(() => {
    fetchData();
});
</script>

<template>
    <div id="wrapper">
        <Sidebar :title="'LSM'" :isOpen="true"></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <Header></Header>
                <div class="container-fluid">
                    <h1 class="h3 mb-2 text-gray-800">Tables</h1>
                    <p class="mb-4">Users dataTables.</p>
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <div v-if="loading">Cargando...</div>
                                <div v-else-if="error">Error: {{ error }}</div>
                                <DataTable v-else :users="users">
                                </DataTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    </div>
</template>