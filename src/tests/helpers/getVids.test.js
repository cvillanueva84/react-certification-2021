import { getVids } from "../../helpers/getVids";


describe('Test helper getVids', () => {
    it('should have items', async() => {
        const items = await getVids('');
        expect(items.length).toBe(24);
    });

});