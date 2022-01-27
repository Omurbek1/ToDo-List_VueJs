Vue.createApp({
    data() {
        return {
            valueInput: '',  //Введите дпнные
            needDoList: [],  //проверка
            completList: [] // Сделанные записи
        };
    },

    methods: {
        // Введите данный
        handleInput(event) {
            this.valueInput = event.target.value;
        },
        // Добавить новый запись
        addTask() {
            if (this.valueInput === '') { return };
            this.needDoList.push({
                title: this.valueInput,
                id: Math.random()
            });
            this.valueInput = '';
        },
        // Проверка чекбокса
        doCheck(index, type) {
            if (type === 'need') {
                const completMask = this.needDoList.splice(index, 1);
                this.completList.push(...completMask);

            }
            else {
                const noCompleteMask = this.completList.splice(index, 1)
                this.needDoList.push(...noCompleteMask)
            }
        },
        // Удаление чек бокса
        removeMask(index, type) {
            const toDoList = type === 'need' ? this.needDoList : this.completList;
            toDoList.splice(index, 1)
        }

    },
}).mount('#app');