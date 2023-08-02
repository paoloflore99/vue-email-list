
// const randomNumbers =[];
// const url = "https://flynn.boolean.careers/exercises/api/array/integers?min=10&max=101&items=20"

// axios.get(url).then(function(response) {
//     console.log(response);
//     console.log(response.data);

// })

const app = Vue.createApp({
    data() {
        return {
            generatedEmails: [],
            emailsGenerated: false,
        };
    },
    methods: {
        async generateEmails() {
            this.emailsGenerated = false; // Resetta il flag di generazione a false
            this.generatedEmails = []; // Svuota l'array di indirizzi email

            try {
                const response = await axios.get(
                    "https://flynn.boolean.careers/exercises/api/random/mail",
                    { params: { qty: 10 } }
                );

                this.generatedEmails = response.data;
                this.emailsGenerated = true; // Imposta il flag di generazione a true
            } catch (error) {
                console.error(error);
                this.emailsGenerated = false; // In caso di errore, assicurati che il flag sia ancora false
            }
        },
    },
});

app.mount("#app");
