import BaseBehaviour from "./base";

class ReadBehaviour extends BaseBehaviour {
    constructor($name = "READ", $label = "查看", $code = 3){
        super($name, $label, $code);
    }
}

export default ReadBehaviour;