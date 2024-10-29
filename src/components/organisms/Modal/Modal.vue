<script setup>
import { ref } from 'vue';

const showModal = ref(false);

const openModal = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};

defineExpose({
    showModal,
    closeModal
});
</script>

<template>
    <button @click="openModal" class="btn btn-primary">
        <slot name="btn-modal"></slot>
    </button>
    <div class="modal" :class="{ show: showModal }" tabindex="-1" :style="{ display: showModal ? 'block' : 'none' }">
        <div class="overlay" v-if="showModal" @click="closeModal"></div>
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="header"></slot>
                    <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                    <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 8px;
    z-index: 20;

    .modal-dialog {
        z-index: 11;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 10;
    }

    .close {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
    }

    @media (min-width: 576px) {
        .modal-dialog {
            max-width: 800px;
        }
    }
}
</style>
