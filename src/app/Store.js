import { autorun, observable } from 'mobx'
class Store {
  @observable flights = []
  @observable filter = ""
}

var store = window.store = new Store

export default store
