import { observable, computed, action } from "mobx";

class LoginStore {
  @observable userObject = { email: "", password: "" };
  @observable temp_array = [];

  @action
  setUser(user) {
    this.userObject = user;
  }
  @computed get getUser() {
    return this.userObject;
  }
  @computed get getTemp() {
    return this.temp_array.length;
  }
}

export default LoginStore;
