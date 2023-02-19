import { ExtractPropTypes } from 'vue'

export const navType = ['whiteColor', 'blackColor']

export const navProps = {
    type: {
        type: String,
        validator(value: string) {
            return navType.includes(value)
        }
    },
    disabled: Boolean,
}

export type backToTopProps = ExtractPropTypes<typeof navType>
