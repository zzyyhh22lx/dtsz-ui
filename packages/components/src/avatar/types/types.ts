import { ExtractPropTypes } from 'vue'

export const AvatarShape = ['circle', 'square']

export const AvatarSize = ['large', 'middle', 'small'];

/**
 * 接收传过来的值
 * @param shape 定义按钮的形状 可选值为 'circle' | 'square'
 * @param size 定义按钮的大小 默认middle 可选值为 'large' | 'middle' | 'small' 
*/
export const avatarProps = {
  shape: {
    type: String,
    validator(value: string) {
      return AvatarShape.includes(value)
    },
    default:'circle'
  },
  size: {
    type: String,
    validator(value: string) {
      return AvatarSize.includes(value)
    },
    default: 'middle'
  },
  src: {
    type:String,
    default:'',
  },
  alt: String,
}

export type AvatarProps = ExtractPropTypes<typeof avatarProps>
