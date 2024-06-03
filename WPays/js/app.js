const { createApp, reactive, computed } = Vue;

const DEFAULT_STATE = {
  state: true,
  inputName: "",
  names: [],
  error: "",
  showError: false,
  result: "",
};

createApp({
  setup() {
    const data = reactive(DEFAULT_STATE);
    ///methods
    const addNameToList = () => {
      const userName = data.inputName
      data.names.push(userName)
      data.inputName = ''

    };
    return {
      data,
      addNameToList,
    };
  },
}).mount("#app");
