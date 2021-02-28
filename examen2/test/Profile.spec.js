import {mount} from "@vue/test-utils"
import Profile from '@/views/Profile.vue'

describe("test jest page Profile", () => {

    test('test profile inctance', () => {

        const wrapper = mount(Profile, {
            Data: {
                Profile:{
                    name: "Profile"
                }
            }
        })   // verification
        expect(wrapper.isVueInstance()).toBeTruthy();
    })

})