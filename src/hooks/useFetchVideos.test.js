import { useFetchVideos } from './useFetchVideos';
import { renderHook } from '@testing-library/react-hooks';

describe('Test useFetchVideos', () => {
    it('should have a initialState', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchVideos(""));
        await waitForNextUpdate();
        const { items, loading } = result.current;
        expect(items.length).toBe(24);
        expect(loading).toBe(false);
    });

    it('should have elemets search', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchVideos("Gatos"));
        await waitForNextUpdate();
        const { items, loading } = result.current;
        expect(items.length).toBe(24);
        expect(loading).toBe(false);
    });


});