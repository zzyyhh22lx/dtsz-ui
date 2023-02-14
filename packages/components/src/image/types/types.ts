import { ExtractPropTypes } from 'vue'

export const ImageFit = ['fill', 'contain', 'cover', 'none', 'scale-down']

export const AvatarSize = ['large', 'middle', 'small'];

/**
 * 接收传过来的值
 * @param fit 定义图片如何适应到容器框 可选值为 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
 * @param size 定义按钮的大小 默认middle 可选值为 'large' | 'middle' | 'small' 
*/
export const imageProps = {
  src: {
    type: String,
    default: ""
  },
  fit: { type: String, 
    default: "cover" 
},
  lazy: {
    type: Boolean, 
    default: false
  }
}

export type imageProps = ExtractPropTypes<typeof imageProps>
