import Vue from 'vue'
import Post from '../../../src/theme/Post.vue'

describe('Posts.vue', () => {
  it('should render a link', () => {
    const PostConstractor = Vue.extend(Post)
    const comp = new PostConstractor({
      propsData: {
        link: 'http://www.pluralsight.com'
      }
    }).$mount()
    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
      .to.equal('http://www.pluralsight.com')
  })
})
