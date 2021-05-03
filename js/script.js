const app = new Vue({
    el: "#app",
    data: {
        emailList: [],
    },
    computed: {
        isReady() {
            return this.emailList.length === 10;
        }
    },
    created() {
        this.getMail(10);
        // console.log(this.emailList);
    },
    
    methods: {

        /**
         * 
         * @param {number} nElem number of emails to generate
         */
        getMail(nElem) {
            for (let i = 0; i < nElem; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(result => this.emailList.push(result.data.response))
                .catch(error => console.log(error))
            }
        },
        
    }
})