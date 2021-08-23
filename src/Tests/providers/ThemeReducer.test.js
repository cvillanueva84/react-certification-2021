import { ThemeReducer } from '../../providers/Theme/Theme.reducer'

describe('Test of the actions of the Theme Reducer', () => {
    
    const initialState = {isDark: false}
    test('should toogle the dark mode', () => {
        const updateAction = {type: 'TOGGLE_DARK_MODE', newState: {isDark: true} };
        const updatedState = ThemeReducer(initialState, updateAction);
        expect(updatedState).toEqual({isDark: true});
    })
    
})
