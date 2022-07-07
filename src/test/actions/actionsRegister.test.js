
import  { registerUserSync } from "../../redux/actions/actionsRegister";
import { typesLogin } from "../../redux/types/types";




describe("pruebas a register",()=>{
    test("register sync",()=>{
        const nombre="juan"
        const email="juan@gmail.com"
        const pass="123456789"

        const registeruserSync=registerUserSync(nombre,email,pass)
        expect(registeruserSync).toEqual({
            type: typesLogin.register,
            payload: {
                nombre, email, pass
           }
        })
    })
    test("register syncDifferent",()=>{
        const nombre1="juan734"
        const email1="juan734@gmail.com"
        const pass1="1234567890"

        const registeruserSync=registerUserSync(nombre1,email1,pass1)
        expect(registeruserSync).not.toEqual({
            type: typesLogin.register,
            payload: {
                nombre1, email1, pass1
           }
        })
    })
    test("register syncDifferentReact",()=>{
        const nombre2="eliza"
        const email2="eliza@gmail.com"
        const pass2="987654321"

        const registeruserSync=registerUserSync(nombre2,email2,pass2)
        expect(registeruserSync).not.toEqual({
            type: typesLogin.register,
            payload: {
                nombre2, email2, pass2
           }
        })
    })
});