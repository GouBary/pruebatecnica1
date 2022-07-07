import { typesLogin } from "../../../redux/types/types";

describe("pruebas a types",()=>{
    test("type login",()=>{
        expect(typesLogin).toEqual({
            register:"registro de usuario",
            login: "login",
            logout: "logout"
        })
    })
    test("type login!=login",()=>{
        expect(typesLogin).not.toEqual({
            registrate:"registro de usuario",
            inicia: "login",
            salte: "logout"
        })
    })
    test("type logindifferent basic",()=>{
        expect(typesLogin).not.toEqual({
            registrate:"registro de usuario",
            inicia: "login",
            salte: "logout"
        })
    })
});