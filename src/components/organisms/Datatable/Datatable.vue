<script setup>
import Modal from '../Modal/Modal.vue';
import { ref, defineProps, watch } from 'vue';

const props = defineProps({
    users: {
        type: Array,
        default: [],
    }
});

</script>

<template>
    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Company Name</th>
                <th>Website</th>
                <th>More Details</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Company Name</th>
                <th>Website</th>
                <th>More Details</th>
            </tr>
        </tfoot>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.name }}</td>
                <td>{{ user.phone }}</td>
                <td>{{ user.company.name }}</td>
                <td>{{ user.website }}</td>
                <td>
                    <Modal>
                        <template v-slot:btn-modal>
                            <p class="modal-title">More Details</p>
                        </template>
                        <template v-slot:header>
                            <h5 class="modal-title">{{ user.name }}</h5>
                        </template>
                        <template v-slot:default>
                            <div class="container">
                                <div class="mb-4">
                                    <h6 class="fw-bold">Details</h6>
                                    <table class="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td><strong>Email:</strong></td>
                                                <td>{{ user.email }}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Calle:</strong></td>
                                                <td>{{ user.address.street }}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Suite:</strong></td>
                                                <td>{{ user.address.suite }}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Ciudad:</strong></td>
                                                <td>{{ user.address.city }}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Código Postal:</strong></td>
                                                <td>{{ user.address.zipcode }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </template>
                        <template v-slot:footer>
                            <button type="button" class="btn btn-primary">Save
                                changes</button>
                        </template>
                    </Modal>
                </td>
            </tr>
        </tbody>
    </table>
</template>