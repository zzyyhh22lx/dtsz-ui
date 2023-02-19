import { ExtractPropTypes } from 'vue'

export const backToTopType = ['normal', 'blueColor']

export const backToTopProps = {
    type: {
        type: String,
        validator(value: string) {
            return backToTopType.includes(value)
        }
    },
    rightLen: {
        type: String,
        default: '40px'
    },
    bottomLen: {
        type: String,
        default: '50px'
    },
    disabled: Boolean,
}

export type backToTopProps = ExtractPropTypes<typeof backToTopType>
