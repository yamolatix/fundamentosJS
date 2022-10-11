const setPropsOnObj = (obj) => {
    obj.p = 5;
    obj.plataforma = 5;
    obj.proximo = next = (num) => num + 1;
    obj.la = { clave: { secreta: { es: 404 } } };
}

const setPropsOnArr = (array) => {
    array.hola = hi = () => 'Hola!';
    array.river = 'plate';
    array[0] = 5;
    array.doble = double = (num) => num * 2;
}

const setPropsOnFunc = (functionObject) => {
    let date = new Date();
    functionObject.year = date.getFullYear();
    functionObject.mitad = half = (num) => num / 2;
    functionObject.prototype.helloWorld = hello = () => 'Hello World'
}