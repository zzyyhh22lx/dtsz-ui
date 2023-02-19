import { ExtractPropTypes } from 'vue'

/**
 * 接收传过来的值
 * @param type 定义按钮的类型 可选值为 'primary' | 'success' | 'info' | 'warning' | 'danger'
 * @param size 定义按钮的大小 默认middle 可选值为 'large' | 'middle' | 'small' | 'mini'
*/
export const DtszDialogProps = {
  title: {
        type: String,
          default: 'Tips'
    },
    width: {
        type: String,
          default: '50%'
    },
    dialogVisible: {
        type: Boolean,
        default:false
    }
}

export type DtszDialogProps = ExtractPropTypes<typeof DtszDialogProps>
