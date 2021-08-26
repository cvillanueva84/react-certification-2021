import { useFetch } from "../../../utils/hooks/useFetch";
import { renderHook } from '@testing-library/react-hooks'

describe('Test from the useFetch custom hook', () => {

    test('should return the inital state, which is an empty object', async  () => {  
        const { result } = renderHook(() => useFetch('wizeline'))
        const { videos } = result.current
        expect(typeof videos).toBe('object')
        expect(videos.length).toBe(0)
    })
    test('should return an array with videos', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch('wizeline'))
        await waitForNextUpdate()
        const { videos } = result.current;
        expect(videos.length).toBe(23)
    })
    
})
