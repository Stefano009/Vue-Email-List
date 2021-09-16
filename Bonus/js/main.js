Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        emailGenerated: [],
    },
    mounted() {
        this.emailGenerator()
    },
    methods: {
        emailGenerator() {
            for (i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(function(obj) {
                        console.log(obj.data);
                        //il mio console.log mi da ogni volta una mail diversa, quindi abbiamo un generatore di mail
                        app.emailGenerated.push({ response: obj.data.response, flag: false });
                        console.log(app.emailGenerated)
                    })
            }
        }
    }
})