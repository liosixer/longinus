import BaseBehaviour from "./base";

class DeleteBehaviour extends BaseBehaviour {
    constructor($name = "DELETE", $label = "删除", $code = 4){
        super($name, $label, $code);
    }
}

export default DeleteBehaviour;