<template>
    <div>
        <h1>LE TUE CASE IN OSSERVAZIONE</h1>
        <h6>QUI TROVI LE CASE IN OSSERVAZIONE, SOLO IMMOBOLIARE</h6>
        <h4><router-link to="/addlink"> aggiungi casa in osservazione </router-link></h4>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>link</th>
                    <th>Description</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item._id">
                    <td>{{ item._id }}</td>
                    <td>{{ item.Name }}</td>
                    <td>
                        <a href="{{ item.Link }}">{{ item.Link }}</a>
                    </td>
                    <td>{{ item.Description }}</td>
                    <td><router-link :to="'/detail/' + item._id"> controlla andamento </router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch("https://edo-house-alert.vercel.app/price/links");
                console.log("response", response);
                const data = await response.json();
                this.items = data;
            } catch (error) {
                console.error("Errore durante il recupero dei dati:", error);
            }
        },
    },
};
</script>

<style scoped>
/* Stile per la tabella */
table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #f3f7f7;
}

/* Stile per le righe dispari */
table tr:nth-child(odd) {
    background-color: #d2e7d9;
}

/* Stile per le righe pari */
table tr:nth-child(even) {
    background-color: #b5d6ba;
}

/* Stile per le celle */
table th,
table td {
    padding: 10px;
    text-align: left;
}

/* Stile per l'intestazione della tabella */
table th {
    background-color: #3c7046;
    color: #fff;
}

/* Stile per il testo della tabella */
table td {
    color: #333;
}

/* Stile per l'hover delle righe */
table tr:hover {
    background-color: #88b18b;
}
</style>
