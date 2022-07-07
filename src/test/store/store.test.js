
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { registerUserAsync } from '../../redux/actions/actionsRegister';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    login: {
        id: 'TESTING'
    }
}

let store = mockStore(initState);

describe('prueba a la store', () => {
    beforeEach(() => {
        store = mockStore(initState);
    })

    test('AgregarAsync', async () => {
        await store.dispatch(registerUserAsync({
            nombre: 'maria',
            email: 'maria@gmail.com',
            password:"123456789",
        }));
        const actions = store.getActions()
    })
})



// export const registerUserAsync = (nombre, email, pass)=>{
//     return (dispatch)=>{
//       const auth = getAuth()
//       console.log(auth)
//       createUserWithEmailAndPassword( auth, email, pass)
//        .then(async({user})=> {
//             await updateProfile(auth.currentUser, {displayName : nombre})
//            dispatch(registerUserSync(nombre, email, pass))
//             console.log(user, 'Usuario Registrado')
//        })
//        .catch(error =>console.warn(error))

//    }
// }