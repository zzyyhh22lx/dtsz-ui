import { ExtractPropTypes } from 'vue'

export const ImageFit = ['fill', 'contain', 'cover', 'none', 'scale-down']

/**
 * 接收传过来的值
 * @param fit 定义图片如何适应到容器框 可选值为 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
 * @param size 定义按钮的大小 默认middle 可选值为 'large' | 'middle' | 'small' 
*/
export const imageProps = {
  width: {
    type: [Number, String],
    default: null
  }, // 容器宽度
  height: {
    type: [Number, String],
    default: null
  },
  src: {
    type: String,
    default: ""
  },
  fit: {
    type: String,
    values: ['contain', 'cover', 'fill', 'none', 'scale-down'],
    default: "cover"
  },
  lazy: {
    type: Boolean,
    default: false
  },
  radius: {
    type: [Number, String],
    default: ""
  },
  scrollContainer: {
    type: String,
    default: ""
  }
}

export type imageProps = ExtractPropTypes<typeof imageProps>
