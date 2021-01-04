import { assign_properties } from "../index";

/** Mixin模式指的是，将多个类的接口“混入”（mix in）另一个类 **/
function mix(...mixins) {
    class Mix { 
        constructor() {
            for (let _class of mixins) {
                assign_properties(this, new _class()); // 拷贝实例属性
            }
        }
    }
    for (let mixin of mixins) {
        assign_properties(Mix, mixin);
        assign_properties(Mix.prototype, mixin.prototype);
    }
    return Mix;
}

export default mix;