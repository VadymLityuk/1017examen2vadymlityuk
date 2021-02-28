import mixinTranslations from '@/mixins/mixinTranslations';
import { mount } from '@vue/test-utils';
//translation test to jest
describe('mtesting mixin translations', () => {
    test("title propriety test", () => {
      const Component = {
        render() {},
        title: 'translation mixin',
        mixins: [mixinTranslations]
      }
      mount(Component)
      expect(document.title).toBe('translation mixin')
    })
  })

  //jest test 2