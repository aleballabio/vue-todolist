const app = new Vue({
    el: '#root',
    data: {
        newTask: {
            testo: "",
            check: false,
        },
        tasks: [
            {
                testo: "Fare o compiti",
                check: false,
            }
        ],
    },
    methods: {
        addTask() {
            if (this.newTask.testo.trim() == "") { }
            else {
                this.tasks.unshift(this.newTask);
                console.log(this.newTask.testo);
                this.newTask = {
                    testo: "",
                    check: false,
                };
            }
        },

        removeTask(index) {
            this.tasks.splice(index, 1);
        },
    }
});
