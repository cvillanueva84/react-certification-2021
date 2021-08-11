import { useFetch } from "../../../utils/hooks/useFetch";
import { renderHook } from '@testing-library/react-hooks'

describe('Test from the useFetch custom hook', () => {
    test('should return the inital state, which is an empty array', async () => {  
        const { result, waitForNextUpdate } = renderHook(() => useFetch('nmXMgqjQzls'))
        const { singleVideo  } = result.current
        await waitForNextUpdate()
        expect(singleVideo).toEqual([])
    })

    test('should return an array with a single video', async () => {
        let testId = 'nmXMgqjQzls'
        const { result, waitForNextUpdate } = renderHook(() => useFetch(testId))
        await waitForNextUpdate()
        const { singleVideo  } = result.current
        expect(singleVideo.length).toBe(1)
    })
    
    
})
