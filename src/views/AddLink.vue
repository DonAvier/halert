<template>
    <div>
        <form @submit.prevent="submitForm">
            <input type="text" v-model="formData.Name" placeholder="Name" />
            <input type="text" v-model="formData.Link" placeholder="Link" />
            <textarea v-model="formData.Description" placeholder="Descrizione"></textarea>
            <button type="submit">Submit</button>
        </form>
        <p v-if="message">{{ message }}</p>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            formData: {
                Name: "",
                Link: "",
                Description: "",
            },
            message: "",
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await axios.post("https://edo-house-alert.vercel.app/price/link", this.formData);
                this.message = response.data.message;
            } catch (error) {
                this.message = "Errore durante l'invio dei dati.";
                console.error(error);
            }
        },
    },
};
</script>
<style scoped>
form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f3f7f7;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

input[type="text"],
textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

textarea {
    height: 100px; /* Altezza maggiore per il textarea */
}

button[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #3c7046;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #265730;
}
</style>
