import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  height: string
  width: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  width,
  height,
  slug,
}: Props) => {
  return (
    <div className='column is-one-third'>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} width={width} height={height} />
      </div>
      <div className="columns is-mobile">
      <h3 className="title is-5 column is-two-thirds is-mobile">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
        <div className="column has-text-weight-light has-text-right">
          <DateFormatter dateString={date} />
        </div>

      </div>

      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}

export default PostPreview
