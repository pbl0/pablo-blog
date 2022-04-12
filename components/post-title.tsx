import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="title my-6 text-center">
      {children}
    </h1>
  )
}

export default PostTitle
