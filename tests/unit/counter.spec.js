import {createLocalVue, shallowMount, mount} from "@vue/test-utils"
import Counter from "@/Counter"
import Vuex from "vuex"
import { state, actions, mutations } from "@/store"

describe("Counter.vue", () =>{
    it("component exists check", () => {
        const LocalVue = createLocalVue()
        createLocalVue(Vuex)
        const wrapper = shallowMount(Counter, {
            LocalVue,
            store: new Vuex.Store({
                state
            })
        })
        expect(wrapper.exists()).toBeTruthy()
    })
    it("Increase button exist check", () => {
        const LocalVue = createLocalVue()
        createLocalVue(Vuex)
        const wrapper = mount(Counter, {
            LocalVue,
            store: new Vuex.Store({
                state
            })
        })
        // get Increase button
        const increase_button = wrapper.findAll("button").filter(element => element.text() == "Increase").at(0)
        expect(increase_button.exists()).toBeTruthy()
    })
    it("Decrease button exist check", () => {
        const LocalVue = createLocalVue()
        createLocalVue(Vuex)
        const wrapper = mount(Counter, {
            LocalVue,
            store: new Vuex.Store({
                state
            })
        })
        // get Decrease button
        const decrease_button = wrapper.findAll("button").filter(element => element.text() == "Decrease").at(0)

        expect(decrease_button.exists()).toBeTruthy()
    })
    it("Increase button functionality check", () => {
        const LocalVue = createLocalVue()
        createLocalVue(Vuex)
        const wrapper = mount(Counter, {
            LocalVue,
            store: new Vuex.Store({
                state,
                actions,
                mutations
            })
        })
        // get initial value of count
        const initial_value = state.count

        // get button
        const increase_button = wrapper.findAll("button").filter(element => element.text() == "Increase").at(0)
        
        // make action
        increase_button.trigger("click")

        expect(state.count === initial_value + 1).toBeTruthy()
    })
    it("Decrease button functionality check", () => {
        const LocalVue = createLocalVue()
        createLocalVue(Vuex)
        const wrapper = mount(Counter, {
            LocalVue,
            store: new Vuex.Store({
                state,
                actions,
                mutations
            })
        })
        // get initial value of count
        const initial_value = state.count

        // get button
        const decrease_button = wrapper.findAll("button").filter(element => element.text() == "Decrease").at(0)

        // make action
        decrease_button.trigger("click")

        expect(state.count === initial_value - 1).toBeTruthy()
    })
    it("2 increase + decrease functionality check together", () => {
        const LocalVue = createLocalVue()
        createLocalVue(Vuex)
        const wrapper = mount(Counter, {
            LocalVue,
            store: new Vuex.Store({
                state,
                actions,
                mutations
            })
        })
        // get initial value of count
        const initial_value = state.count
        const expected_value = 1
        
        // get buttons
        const increase_button = wrapper.findAll("button").filter(element => element.text() == "Increase").at(0)
        const decrease_button = wrapper.findAll("button").filter(element => element.text() == "Decrease").at(0)

        // make actions
        increase_button.trigger("click")
        increase_button.trigger("click")
        decrease_button.trigger("click")

        // check action
        expect(state.count === expected_value).toBeTruthy()
    })
    it("Decrease button functionality check", () => {
        const LocalVue = createLocalVue()
        createLocalVue(Vuex)
        const wrapper = mount(Counter, {
            LocalVue,
            store: new Vuex.Store({
                state,
                actions,
                mutations
            })
        })
        // get text
        const count_text_span = wrapper.find("span")

        // is visible for controling text is showing?
        expect(count_text_span.isVisible()).toBeTruthy()
    })

})