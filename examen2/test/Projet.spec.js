import Projet from '@/views/Projet';
import { shallowMount } from '@vue/test-utils';

describe('test jest pour le page de Projets', () => {

    test('Projet', () => {
        const wrapper = shallowMount(Projet, {
            data() {
                return {
                    projets: [
                        {name:"MOVIMANIA",link:"https://vadymlityuk.github.io/AEC_Front_End/Programmation2/mania/moviemania/build/index.html?fbclid=IwAR2vaOyHFvupjj_q2CFfbjKaCIIbqP9qYl6Wj7QGfIIjgFOHcZOSs7pjJ8I#/Accueil"},
                        {name:"OVERWTACH",link:"https://vadymlityuk.github.io/AEC_Front_End/Integration1/Projet%20Final/index.html"},
                        {name:"Portfolio",link:"https://vadymlityuk.github.io/AEC_Front_End/Portfolio/PORTFOLIO/portfolio/index.html?fbclid=IwAR2U9Lcif5OLx-0X4UVRdoog6luowZ9rKiF5DyfJiObkZSDU3IeKFIqMJbI"},
                        {name:"Spotify",link:"https://vadymlityuk.github.io/AEC_Front_End/Programmation2/spotify/quebefy/build/index.html"},
                    ] 
                }
            }

        })
        expect(wrapper.find("ul:first-child > button").text()).toBe("MOVIMANIA test" || "MOVIMANIA test");
         })

        
})