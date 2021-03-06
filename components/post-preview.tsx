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
  hidden: boolean
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
  hidden
}: Props) => {
  if (hidden){
    return null
  } else {
    return (
      <div className='column is-one-third'>
        <div className="mb-5">
          <CoverImage slug={slug} title={title} src={coverImage} width={width} height={height} />
        </div>
        <div className="rows">
        <h3 className="title is-4">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="row has-text-weight-light has-text-left">
            <DateFormatter dateString={date} />
            <hr className="border-neutral-200 mt-28 mb-24" />
        </div>
  
  
        </div>
  
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </div>
    )
  }

}

export default PostPreview
