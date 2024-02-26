<template>
    <div>
        <h1>detail - {{ this.$route.params.id }}</h1>
        <canvas id="myChart" width="400" height="150"></canvas>
    </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
    data() {
        return {
            items: [],
        };
    },
    mounted() {
        this.fetchData().then(() => {
            const ctx = document.getElementById("myChart");

            var myChart = new Chart(ctx, {
                type: "line",
                data: {
                    labels: this.items.map((item) => {
                        const date = new Date(item.RecordDate);
                        return date.toLocaleDateString();
                    }),
                    datasets: [
                        {
                            label: "Prezzo case",
                            data: this.items.map((item) => item.Value),
                            borderColor: "#393939",
                            borderWidth: 2,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            ticks: {
                                color: "#393939",
                                font: {
                                    size: 12,
                                    weight: 700,
                                },
                                stepSize: 2,
                                beginAtZero: true,
                            },
                        },
                        x: {
                            ticks: {
                                color: "#393939",
                                font: {
                                    size: 12,
                                    weight: 700,
                                },
                                stepSize: 2,
                                beginAtZero: true,
                            },
                        },
                    },
                },
            });

            myChart.update();
        });
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch("https://edo-house-alert.vercel.app/price/list/" + this.$route.params.id);
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

<style scoped></style>
