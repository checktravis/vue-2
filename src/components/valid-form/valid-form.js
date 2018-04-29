export default {
  name: 'valid-form',
  data() {
    return {
      firstname: '',
      lastname: '',
      errors:[],
    };
  },
  methods:{
    checkForm:function(e) {
      this.errors.push("Name required.")
      /*
      if(this.name && this.age) return true;
      this.errors = [];
      if(!this.name) this.errors.push("Name required.");
      if(!this.age) this.errors.push("Age required.");
      e.preventDefault();
      */
      return e
    }
  }
};
