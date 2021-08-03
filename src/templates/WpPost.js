const WpPost = ({
  data: {
    wpPost: { title, content, id },
  },
}) => {
  return (
    <div className={`post-${id}`}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}