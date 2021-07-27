import { render } from "@testing-library/react";

import ListItem from "./ListItem";

const itemContent = {
    "item": {
        "snippet": {
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
                }
            }
        }};

describe('ListItem', () => {
    test('Should create a container for the item content', () => {
        const item = render(ListItem(itemContent));
        const listItem = item.container.querySelector('.itemStyle')
        expect(listItem).toBeDefined()
    })

    test('Should create a button for click function', () => {
        const item = render(ListItem(itemContent));
        const listItem = item.container.querySelector('.itemButton')
        expect(listItem).toBeDefined()
    })

    test('Should create a container for the item image', () => {
        const item = render(ListItem(itemContent));
        const listItem = item.container.querySelector('.itemImage')
        expect(listItem).toBeDefined()
    })

    test('Should create a container for title & description', () => {
        const item = render(ListItem(itemContent));
        const listItem = item.container.querySelector('.descContainer')
        expect(listItem).toBeDefined()
    })

    test('Should create a container for the item title', () => {
        const item = render(ListItem(itemContent));
        const listItem = item.container.querySelector('.title')
        expect(listItem).toBeDefined()
    })

    test('Should create a container for the item description', () => {
        const item = render(ListItem(itemContent));
        const listItem = item.container.querySelector('.description')
        expect(listItem).toBeDefined()
    })
})
