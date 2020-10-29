## Ejercicios de Hooks

### CounterApp (Hook useState)
Usamos el useState y creamos un custom hook para hacer el incremento, decremento y el reset de un contador.

- counter.css / counter.sass = Estilos.
- CounterApp = uso del useState con mas de un objeto, en donde cambiaremos con un botón solo el estado de un contador, sin afectar el estado del otro.
- CounterWithCustomHook = uso del useState usando un custom hook (useCounter) en donde tenemos un contador, un botón de incremento, decremento y un botón de reset.

### SimpleForm (Hook useEffect)
Usamos el useEffect y creamos un custom hook para controlar un sencillo formulario.

- effect.css / effect.sass = Estilos.
- SimpleForm = simple formulario con uso de componente message cuando se activa el useEffect.
- Message = mensaje de las coordenadas del mouse al activarse el useEffect y desactivandolo para no colapsar la memoria.
- FormWithCustomHook = simple formulario en donde utilizamos un custom hook (useForm) para controlar los datos de este.