import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  width: string
  height: string
  slug?: string
}

const CoverImage = ({ title, src, width, height, slug }: Props) => {
  const image = (
          <Image
    src={src}
    alt="Cover of the post"
    width={width}
    height={height}
    priority
    className={'ml-auto'}
  />

  )
  return (
    <div className="">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
