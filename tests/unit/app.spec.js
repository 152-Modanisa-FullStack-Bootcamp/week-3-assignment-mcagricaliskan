import Vuex from "vuex"
import {createLocalVue, shallowMount, mount} from "@vue/test-utils"
import { state, getters } from "@/store"
import App from "@/App"


describe("App.vue", () =>{
    it("h1 exists", () => {
        const LocalVue = createLocalVue()
        createLocalVue(Vuex)
        const wrapper = shallowMount(App, {
            LocalVue,
            store: new Vuex.Store({
                state,
                getters
            })
        })

        // get h1 element
        const h1_element = wrapper.find("h1")

        expect(h1_element.exists()).toBeTruthy()
    })
    it("h1 text equals to Daily Corona Cases in Turkey check", () => {
        const LocalVue = createLocalVue()
        createLocalVue(Vuex)
        const wrapper = shallowMount(App, {
            LocalVue,
            store: new Vuex.Store({
                state,
                getters
            })
        })

        // get h1 element
        const h1_element = wrapper.find("h1")

        expect(h1_element.text() === "Daily Corona Cases in Turkey").toBeTruthy()
    })
    it("notificationArea class check based on getCount value", () => {
        const LocalVue = createLocalVue()
        createLocalVue(Vuex)
        
        // set count 10 for getting danger class (getCount will return state.count so?)
        const mockState = {
            count: 10
        }

        const wrapper = shallowMount(App, {
            LocalVue,
            store: new Vuex.Store({
                state: mockState,
                getters
            })
        })

        // get div element
        const notification_div_element = wrapper.find(".notificationArea")
        
        expect(notification_div_element.classes().includes("danger")).toBeTruthy()
    })
    it("notificationArea text message check", () => {
        const LocalVue = createLocalVue()
        createLocalVue(Vuex)
        
        // set count 10 for getting "Danger!!! Case count is 10k"
        const mockState = {
            count: 10
        }

        const wrapper = shallowMount(App, {
            LocalVue,
            store: new Vuex.Store({
                state: mockState,
                getters
            })
        })

        // get div element
        const notification_div_element = wrapper.find(".notificationArea")

        expect(notification_div_element.text() === "Danger!!! Case count is 10k").toBeTruthy()
    })
})