import { ref } from 'vue';

const dataResponse = ref({
    data: null,
    error: null,
    loading: false,
});

const callApi = async (url) => {
    dataResponse.value.loading = true;  // Cambié dataResponse.loading a dataResponse.value.loading
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        dataResponse.value.data = await response.json(); // Cambié dataResponse.data a dataResponse.value.data
    } catch (error) {
        dataResponse.value.error = error.message; // Cambié dataResponse.error a dataResponse.value.error
    } finally {
        dataResponse.value.loading = false; // Cambié dataResponse.loading a dataResponse.value.loading
    }
};

export const useFetchComposable = async (url) => {
    await callApi(url);

    return {
        data: dataResponse.value.data, // Cambié dataResponse.data a dataResponse.value.data
        error: dataResponse.value.error, // Cambié dataResponse.error a dataResponse.value.error
        loading: dataResponse.value.loading, // Cambié dataResponse.loading a dataResponse.value.loading
    };
};
