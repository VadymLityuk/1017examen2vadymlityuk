import Contact from '@/views/Contact';
import { mount } from '@vue/test-utils';

describe("Tests unitaires le page Contact", () => {

   
    test('select test element', () => {
        const wrapper = mount(Contact)
        expect(wrapper.find('#selectContactType')).toBeTruthy;
    })

    test('test select', () => {
        const wrapper = mount(Contact)
        expect(wrapper.find('#selectContactType').isEmpty()).toBeTruthy;
    })

    
})