/**
 * @description toolbar react component
 * @author wangfupeng
 */

import React, { useRef, useEffect } from 'react'
import * as wangEditor from '@wangeditor-next/editor'

interface IProps {
  editor: wangEditor.IDomEditor | null
  defaultConfig?: Partial<wangEditor.IToolbarConfig>
  mode?: string
  style?: object
  className?: string
}

function ToolbarComponent(props: IProps) {
  const { editor, defaultConfig = {}, mode = 'default', style = {}, className } = props
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current == null) return
    if (editor == null) return
    if (ref.current?.getAttribute('data-w-e-toolbar')) return

    wangEditor.createToolbar({
      editor,
      selector: ref.current,
      config: defaultConfig,
      mode,
    })
  }, [editor])

  return <div style={style} ref={ref} className={className}></div>
}

export default ToolbarComponent
