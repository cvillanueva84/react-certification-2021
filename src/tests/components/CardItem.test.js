import React from 'react';
import {shallow} from 'enzyme';
import { CardItem } from '../../components/CardItem';


describe('Test CardItem', () => {
    const title = 'title';
    const description = 'description';
    const url = 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo';
    const wrapper = shallow(<CardItem title={title} description={description} url={url}/>);

    it('should render provided properties', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render img', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    it('should render h2', () => {
        const h2 = wrapper.find('h2');
        expect(h2.text().trim()).toBe(title);
    });

    it('should render p', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(description);
    });

    it('should have className Css', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('card-item')).toBe(true);
    });
    
});