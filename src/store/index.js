import { createStore } from "vuex";
import handleSidebar from "./modules/handle_sidebar"
import handleFilterBox from "./modules/uac/handle_filter"

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    handleSidebar,
    handleFilterBox
  }
});
