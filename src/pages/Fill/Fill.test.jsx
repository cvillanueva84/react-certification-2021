import React from 'react'
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Fill from './Fill';
import { CardItem } from '../../components/CardItem';
import videoMock from '../../mock/youtubeData';


describe('Test Fill', () => {

    it('should render', () => {
        const wrapper = shallow(<Fill/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should dont have videos', () => {
        const wrapper = shallow(<Fill/>);
        const cardItem = wrapper.find('CardItem');
        expect(cardItem.length).toBe(0);
    });

    it('should have videos',  () => {
        const item = videoMock;
        const result = renderer.create(<Fill videos={item}/>);
        expect(result).toMatchSnapshot();
    });

    it('should have videos',  () => {
        const item = videoMock;
        const result = renderer.create(<CardItem videos={item}/>);
        expect(result).toMatchSnapshot();
    });

    
});