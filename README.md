# Ejercicios de Hooks

## CounterApp
#### useState
Usamos el useState y creamos un custom hook para hacer el incremento, decremento y el reset de un contador.

- counter.css / counter.sass = Estilos.
- CounterApp = uso del useState con mas de un objeto, en donde cambiaremos con un botón solo el estado de un contador, sin afectar el estado del otro.
- CounterWithCustomHook = uso del useState usando un custom hook (useCounter) en donde tenemos un contador, un botón de incremento, decremento y un botón de reset.

## SimpleForm
#### useEffect
Usamos el useEffect y creamos un custom hook para controlar un sencillo formulario.

- effect.css / effect.sass = Estilos.
- SimpleForm = simple formulario con uso de componente message cuando se activa el useEffect.
- Message = mensaje de las coordenadas del mouse al activarse el useEffect y desactivandolo para no colapsar la memoria.
- FormWithCustomHook = simple formulario en donde utilizamos un custom hook (useForm) para controlar los datos de este.

## MultipleCustomHooks
#### useFetch
Usamos el useState en un customhook donde tomamos desde un api de breaking bad algunas frases de los personas, las llamamos a un archivo y las mostramos, también llamamos el useCounter para cambiar el id del quote desde un boton.

- estilo.css / estilo.sass = Estilos
- MultipleCustomHooks = Se le da el url del api que usara el useFetch que utilizamos, llamamos la data necesaria y la mostramos en divs y blockquote.
- useFetch = Utilizamos el useState para ver el estado del componente, el useEffect para que muestre cada vez el loading, al presionar el boton en el componente anterior, y usamos el useCounter para hacer el incremento del id para pasar al siguiente quote del data.

## FocusScreen
#### useRef

Usamos el useRef en donde el objeto devuelto se mantendrá persistente durante la vida completa del componente (.current)

- estilo.css / estilo.sass = Estilos
- FocusScreen = Ejemplo sencillo del useRef, uso del select para enfocarnos en el input.
- RealExampleRef = Hacemos uso del useRef en el useFetch que nos dira si el componente fue montado o no lo fue, esto con uso del useEffect para ver el estado del efecto.

## Layout
#### useLayoutEffect

Usamos el useLayoutEffect para ver los cambios de estado de las dimensiones de un div, cada vez que este nuevamente se renderiza. Se dispara de forma síncrona después de todas las mutaciones de DOM.

- estilo.css / estilo.sass = Estilos
- Layout = Misma prueba copiando los MultiplesHook, en este caso para ver que cambios se hacen cada vez que renderizamos la aplicación.