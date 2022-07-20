import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
  height: string
  width: string
}

const PostHeader = ({
  title,
  coverImage,
  date,
  author,
  width,
  height
}: Props) => {
  const maxHeight = '394'
  const originalHeight = Number(height);
  height = Number(height) < Number(maxHeight) ? height : maxHeight; 
  const resizeRatio = originalHeight / Number(height);
  width = String(Number(width) / resizeRatio);
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden my-3">
      </div>
      <div className="mb-3">
        {coverImage != '' &&
        <CoverImage title={title} src={coverImage} width={width} height={height} />
        }
      </div>
      <div className="">
        <div className="mb-2">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
