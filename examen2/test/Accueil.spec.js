import Accueil from '@/views/Accueil';
import { mount } from '@vue/test-utils';

describe("Tests unitaires page d'Accueil", () => {

 
    test('Accuel est une instance', () => {
        const wrapper = mount(Accueil, {
            propsData: {
               Accueil:{
                   name: "Accueil"
               }
            }
        })
 expect(wrapper.isVueInstance()).toBeTruthy();
    })

   test('Test Home', () => {
        const pass= 'Home';
        expect(Accueil.name).toEqual(pass);
    })

})