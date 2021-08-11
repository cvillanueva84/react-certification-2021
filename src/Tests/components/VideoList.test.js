import React from 'react';
import { shallow } from 'enzyme';
import VideoList from '../../components/VideoList/VideoList.component';

describe('Tests of the VideoList component', () => {

    const data =  {
        "kind": "youtube#searchResult",
        "etag": "_PVKwNJf_qw9nukFeRFOtQ837o0",
        "id": {
          "kind": "youtube#channel",
          "videoId": "UCPGzT4wecuWM0BH9mPiulXg"
        },
        "snippet": {
          "publishedAt": "2014-09-27T01:39:18Z",
          "channelId": "UCPGzT4wecuWM0BH9mPiulXg",
          "title": "Wizeline",
          "description": "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
          "thumbnails": {
            "default": {
              "url": "https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo"
            },
            "medium": {
              "url": "https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo"
            },
            "high": {
              "url": "https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo"
            }
          },
          "channelTitle": "Wizeline",
          "liveBroadcastContent": "upcoming",
          "publishTime": "2014-09-27T01:39:18Z"
        }
      }
    
    const wrapper = shallow(< VideoList video={data}/>)
    test('should render the VideoList component', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
    
    test('should contain the VideoCardDiv styled component', () => {
        expect(wrapper.find('VideoCardDiv').length).toEqual(1);
    })

    test('should contain the VideoImageDiv styled component', () => {
        expect(wrapper.find('VideoImageDiv').length).toEqual(1);
    })

    test('should contain the TitleSpan styled component', () => {
        expect(wrapper.find('TitleSpan').length).toEqual(1);
    })

    test('should contain the DescriptionSpan styled component', () => {
        expect(wrapper.find('DescriptionSpan').length).toEqual(1);
    })

    test('VideoImageDiv background Image should be the thumbnails.medium.url prop', () => {
        const imgDiv = wrapper.find('VideoImageDiv')
        expect(imgDiv.prop('style').backgroundImage).toBe(`url(${data.snippet.thumbnails.medium.url})`)
    })
    

    test('Title Span styled component should display the title prop', () => {
        const titleSpan = wrapper.find('TitleSpan')
        expect(titleSpan.text()).toBe(data.snippet.title)
    })

    test('Title Span styled component should display the title prop', () => {
        const titleSpan = wrapper.find('TitleSpan')
        expect(titleSpan.text()).toBe(data.snippet.title)
    })
    
    test('Description Span styled component should display the description prop', () => {
        const descriptionSpan = wrapper.find('DescriptionSpan')
        expect(descriptionSpan.text()).toBe(data.snippet.description)
    })
})

