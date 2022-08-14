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

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  width,
  height,
  slug,
}: Props) => {
  const maxHeight = '420'
  const originalHeight = Number(height);
  height = Number(height) < Number(maxHeight) ? height : maxHeight; 
  const resizeRatio = originalHeight / Number(height);
  width = String(Number(width) / resizeRatio);
  return (
    <section>
      <div className="mb-2">
        <CoverImage title={title} src={coverImage} slug={slug} width={width} height={height} />
      </div>
      <div className="mb-6">
        <div className='columns'>
          <h3 className="title is-5 column column is-two-thirds is-mobile">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="is-link">{title}</a>
            </Link>
          </h3>
          <div className="column has-text-weight-light">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <span className="">{excerpt}</span>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
