this.id = 'test';
const thisDemo = {

    funcA: function () {
        console.log('funcA', this)
    },

    funcB: () => {
        console.log('funcB', this)
    }
}

thisDemo.funcA(); //this will represent the thisDemo object.
thisDemo.funcB();