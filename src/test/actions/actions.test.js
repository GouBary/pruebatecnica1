import { loginSync } from "../../redux/actions/actionsRegister";
import { typesLogin } from "../../redux/types/types";




describe("pruebas a actions",()=>{
    test("login sync",()=>{
        const email="email@gmail.com"
        const pass="123456789"

        const loginsync=loginSync(email,pass)
        expect(loginsync).toEqual({
            type: typesLogin.login,
                     payload: {
                        email, pass
                   }
        })
    })
    test("login syncDifferent",()=>{
        
        const pass2="1234567890"
        const email1="juan@gmail.com"

        const loginsync=loginSync(email1,pass2)
        expect(loginsync).not.toEqual({
            type: typesLogin.login,
                     payload: {
                        email1, pass2
                   }
        })
    })
    test("login syncReact",()=>{
        
        const pass3="1234567890"
        const email3="juan734@gmail.com"

        const loginsync=loginSync(email3,pass3)
        expect(loginsync).not.toEqual({
            type: typesLogin.login,
                     payload: {
                        email3, pass3
                   }
        })
    })
});


