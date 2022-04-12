import PostPreview from './post-preview'
import Post from '../types/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="mb-8 border-t border-zinc-700">
      </div>
      <div className="columns is-multiline">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            width={post.width}
            height={post.height}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
