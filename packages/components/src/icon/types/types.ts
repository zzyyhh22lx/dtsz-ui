import { ExtractPropTypes } from 'vue'
export const iconProps = {
    name: {
        type: String
    },
    dot: {
        type: Boolean
    },
    type: {
        type: String, // [large, middle, small, mini] => [5em, 3em, 2em, 1em]
        default: 'mini'
    },
    badge: {
        type: String
    },
    color: {
        type: String
    }
}
export type IconProps = ExtractPropTypes<typeof iconProps>


