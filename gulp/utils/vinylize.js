import source from 'vinyl-source-stream'
import vinylBuffer from 'vinyl-buffer'
import size from 'gulp-size'

export const vinylize = async (filename, ...text) => {
  const stream = source(filename)
  for (let textElement of text)
    await stream.write(textElement)
  await stream.end()
  return stream
    .pipe(vinylBuffer())
    .pipe(size({ title: filename }))
}
