import { ExtractPropTypes } from 'vue'


export const colProps = {
    span: {
        type: [Number, String],
        default: 0
    },  
    offset: {
        type: [Number, String],
        default: 0
    }
}

export type ButtonProps = ExtractPropTypes<typeof colProps>