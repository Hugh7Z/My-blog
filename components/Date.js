export default function DateComponent(props) {
  const dateString = props?.dateString;

  if (!dateString) {
    return null;
  }

  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return <time>{dateString}</time>;
    }

    return (
      <time dateTime={dateString}>
        {date.toLocaleDateString('zh-CN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>
    );
  } catch (error) {
    console.error('Error formatting date:', error);
    return <time>{dateString}</time>;
  }
} 