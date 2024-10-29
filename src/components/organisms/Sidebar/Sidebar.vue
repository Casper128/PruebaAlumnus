<script setup>
import { ref, defineProps, watch } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Admin',
    },
    isOpen: {
        type: Boolean,
        default: false,
    }
});

const sidebarState = ref(props.isOpen);

const toggleSidebar = () => {
    sidebarState.value = !sidebarState.value;
};

</script>

<template>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark" :class=" { toggled: sidebarState }">
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">{{ props.title }}</div>
        </a>
        <hr class="sidebar-divider my-0">
        <li class="nav-item">
            <a class="nav-link" href="#">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </a>
        </li>
        <hr class="sidebar-divider d-none d-md-block">
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle" @click="toggleSidebar"></button>
        </div>
    </ul>
</template>