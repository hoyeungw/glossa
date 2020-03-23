import source from 'vinyl-source-stream'
import vinylBuffer from 'vinyl-buffer'
import size from 'gulp-size'

export const vinylize = (filename, ...text) => {
  const stream = source(filename)
  for (let textElement of text)
    stream.write(textElement)
  stream.end()
  return stream
    .pipe(vinylBuffer())
    .pipe(size({ title: filename }))
}
