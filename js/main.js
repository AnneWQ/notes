/**
 * Created by anne on 3/15/17.
 */
function Func() {}
Func.prototype.name='anne';
Func.prototype.getInfo=function () {
    return this.name
};
var person=new Func();
console.log(person.getInfo());
console.log(person.name);


