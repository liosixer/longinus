const defaultPortrait = require("@/libs/static/images/defaults/default-portrait.png");
const mixin = {
    filters: {
        /** 过滤头像 **/
        filterPortrait: (value) => {
            return !!value ? value : defaultPortrait;
        },
    },
}

export default mixin;