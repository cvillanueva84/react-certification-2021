import { getVids } from "./getVids";

describe('Test helper getVids', () => {
    it('should have items', async() => {
        const items = await getVids('');
        //console.log(items);
        expect(items.length).toBe(25);
    });

});