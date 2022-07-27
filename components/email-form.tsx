import React from 'react'
import { Button } from '@mui/material'
// import { Editor, EditorState } from 'draft-js'
// import 'draft-js/dist/Draft.css'

import EmailField from './email-field'
import { EmailFormProps } from '@/types/EmailFormProps'
import Head from 'next/head'

export default function EmailForm({
  control,
  handleSubmit,
  onSubmit,
  employeeEmail,
}: EmailFormProps) {
  // const [editorState, setEditorState] = React.useState(
  //   EditorState.createEmpty()
  // )

  // const editor = React.useRef(null)

  // function focusEditor() {
  //   const element = editor.current as any
  //   element.focus()
  // }

  // React.useEffect(() => {
  //   focusEditor()
  // }, [])

  return (
    <div className='mr-[20px]'>
      <Head>
        <meta charSet='utf-8' />
      </Head>
      <div className='w-full flex justify-center mt-16 pt-8'>
        <form className='mt-16' onSubmit={handleSubmit(onSubmit)}>
          <EmailField email={employeeEmail} name='to' />
          <EmailField control={control} name='subject' />
          <EmailField control={control} name='text'></EmailField>
          {/* <div onClick={focusEditor}>
            <Editor
              ref={editor}
              editorState={editorState}
              onChange={(editorState) => setEditorState(editorState)}
              placeholder='Tell a story...'
            />
          </div> */}
          <div className='w-full flex justify-end mt-8'>
            <Button
              variant='contained'
              type='submit'
              className='text-black hover:text-white'
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
