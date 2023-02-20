import { ExtractPropTypes } from 'vue'
export const ProgressbarSize = ['normal', 'large']; // 200 400
export const progressbarProps = {
  angle: { // 角度 0~360
    type: Number,
    validator(value: number) {
      value = Math.floor(value)
      return value >= 0 && value <= 360
    },
    default: 0
  },
  inset_bgc: { // 内置颜色
    type: String,
    default: '#ADCC97'
  },
  outset_bgc: { // 外圈颜色
    type: String,
    default: '#C1A4C2'
  },
  size: {
    type: String,
    validator(value) {
        return ProgressbarSize.includes(value)
    },
    default: 'normal'
  }
}

export type ProgressbarProps = ExtractPropTypes<typeof progressbarProps>
