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

## Memorize
#### React.memo

Usamos el componente memo que volverá a calcular el valor memorizado cuando una de las dependencias haya cambiado. Esta optimización ayuda a evitar cálculos costosos en cada render.

- estilo.css / estilo.sass = Estilos
- Memorize = Ejemplo sencillo del uso de memo para que no cambie el valor de un contador.
- Small = Una etiqueta small que evitamos cambie su valor con memo, este botón modifica desde memorize.
- MemoHook = Similar al anterior, ejemplo previo en donde hacemos uso del memo para evitar que un ciclo for nos colapse nuestra memoria; llamamos a procesoPesado, enrutado en helpers el cual hará un ciclo for establecido en el useCounter del useState.

## CallBackHook
#### useCallBack

Usamos el hook useCallBack este devolverá una versión memorizada del callback que solo cambia si una de las dependencias ha cambiado.

- ShowIncrement = componente Botón que usa memo al cual le enviamos como paramentro el increment.
- CallBackHook = hace uso del hook useCallBack que se le pasara un numero como parametro para que contador lo sume y este se renderice nuevamente, también hacemos uso del hook useEffect.

## Tarea Memo

Acá nos dan como taréa hacer el uso del memo y useCallBack, con un arreglo de 5 botones, debemos hacer uso del memo en el botón y el callback en el useState y así evitar que se renderize nuevamente los componentes al presionar el botón.

## intro-reducer & TodoApp
#### useReducer

Usamos el hook useReducer (como alternativa a useState).

- estilo.css / estilo.sass = Estilos
- intro-reducer = Pequeña introducción en donde ponemos en practica el useReducer y para que se utiliza.
- TodoApp = Componente principal en donde hacemos uso del Reducer. Hace uso de localstore .getItem & setItem para mantener la información localmente cuando recargamos la página; parte el reducer con un init, este con un arreglo vacío; una función para agregar una nueva descripción a la lista, una función para eliminar una descripción de la lista y una función de toggle para marcar una acción realizada de la lista (esto con una propiedad de css).
- todoReducer = Componente que posee un Switch con las acciones a realizar enviadas por botones de un formulario, provenientes de TodoApp.
- TodoList = Una Lista ordenada que recorrera un arreglo y los mostrara.
- TodoListItems = Una lista ordenada, que contendrá un parrafo con una descripción enviada desde un formulario, y un botón para eliminar ese parrafo (handleDelete) desde TodoApp.
- TodoApp = Contendra el formulario, además de usar el customHook useForm, este tendra una función para al momento de activar el botón, enviar la información como un objeto a la función handleAddTodo.

## MainApp
#### useContext

- MainApp = Este es el componente principal mostrado en el index, contiene un componente de AppRouter con las rutas y llamamos al componente UserContext.
HomeScreen / AboutScreen / LoginScreen = Componentes de pruebas para usar Link de BrowserRouter.
Navbar = Como el nombre lo dice hacemos un Navbar con los Link en este caso usamos NavLink para agregar propiedades como ClassName active de bootstrap y cuando estamos en cierto path nos la mostrara como active.
AppRouter = Hacemos uso del npm React Router, muy util al momento de definir los path de nuestra app, nos ayuda a llevar un control claro de las rutas y poder exportarlo a nuestro MainApp.
UserContext = Ejemplo de uso del useContext, en donde controlamos desde el MainApp, datos que se mostraran en los componentes hijos, sin tener que llamar innecesariamente cada vez que lo solicitemos.
