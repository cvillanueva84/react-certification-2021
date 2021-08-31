import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";


describe('Test useForm', () => {
    const initialForm = {
        textUser: '',
        textPass: '',
      };

    test('should has values default', () => {
        const { result } =  renderHook(() => useForm(initialForm));
        const [formValues, handleInputChange, reset] = result.current;
        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('should has values initialState', () => {
        const { result } =  renderHook(() => useForm({}));
        const [formValues ] = result.current;
        expect(formValues).toEqual({});
    });

    test('should change textUser', () => {
        const { result } =  renderHook(() => useForm(initialForm));
        const [ , handleInputChange ] = result.current;
        act(() => {
            handleInputChange({
                target: {
                    name: 'textUser',
                    value: 'Wizeline'
                }
            })
        });
        const [formValues] = result.current;
        expect(formValues.textUser).toBe('Wizeline');
        expect(formValues).toEqual({...initialForm, textUser: 'Wizeline'});
    });

    test('should change textPass', () => {
        const { result } =  renderHook(() => useForm(initialForm));
        const [ , handleInputChange ] = result.current;
        act(() => {
            handleInputChange({
                target: {
                    name: 'textPass',
                    value: 'Rocks!'
                }
            })
        });
        const [formValues] = result.current;
        expect(formValues.textPass).toBe('Rocks!');
        expect(formValues).toEqual({...initialForm, textPass: 'Rocks!'});
    });
    
    
    test('should reset', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;
        act(() => {
            handleInputChange({
                target: {
                    textUser: 'user',
                    textPass: 'password'
                }
            });
            reset();
        });
        const [ formValues ] = result.current;
        expect(formValues).toEqual(initialForm);
    });


    
});