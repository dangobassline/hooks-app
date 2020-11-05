const { renderHook, act } = require("@testing-library/react-hooks");
const { useForm } = require("../../hooks/useForm");


describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'nombre',
        email: 'mail@mail.com'
    }

    test('should de regresar un formulario por defecto', () => {
        const {result} = renderHook( () => useForm(initialForm) );
        const [values, handleInputChange, reset] = result.current;
        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('should de cambiar el valor del formulario (cambiar name)', () => {
        const {result} = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange] = result.current;
        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });
        });
        const [values] = result.current;
        expect(values).toEqual({...initialForm,name: 'Melissa'});
    });

    test('should de re-establecer el formulario con Reset', () => {
        const {result} = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset] = result.current;
        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });
            reset();
        });
        const [values] = result.current;
        expect(values).toEqual(initialForm);
    });
});
