const app = Vue.createApp({
    data() {
        return {
            firstName: "John",
            lastName: "Doe",
            email: "john@gmail.com",
            gender: "male",
            picture: "https://randomuser.me/api/portraits/men/10.jpg",
            country: "United States",
            flag: "https://flagsapi.com/US/flat/64.png",
        };
    },
    methods: {
        async getUser() {
            const res = await fetch("https://randomuser.me/api");
            const { results } = await res.json();

            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.picture = results[0].picture.large;
            this.country = results[0].location.country;
            this.flag = "https://flagsapi.com/" + results[0].nat + "/flat/64.png";
        },
    },
});

app.mount("#app");
