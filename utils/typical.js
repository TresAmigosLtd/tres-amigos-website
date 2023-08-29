export async function type(node, ...args) {
  for (const arg of args) {
    switch (typeof arg) {
      case 'string':
        await edit(node, arg)
        break
      case 'number':
        await wait(arg)
        break
      case 'function':
        await arg(node, ...args)
        break
      default:
        await arg
    }
  }
}

export async function typeFast(node, ...args) {
  for (const arg of args) {
    switch (typeof arg) {
      case 'string':
        await editFast(node, arg)
        break
      case 'number':
        await wait(arg)
        break
      case 'function':
        await arg(node, ...args)
        break
      default:
        await arg
    }
  }
}

async function edit(node, text) {
  const overlap = getOverlap(node.textContent, text)
  await perform(node, [
    ...deleter(node.textContent, overlap),
    ...writer(text, overlap),
  ])
}

async function editFast(node, text) {
  await perform(node, [...writer(text)], 10)
}

async function wait(ms) {
  await new Promise(resolve => setTimeout(resolve, ms))
}

const writing = new Map()
async function perform(node, edits, speed = 100) {
  const ongoingIteration = writing.get(node.id) ?? 0
  const currentIteration = ongoingIteration + 1
  writing.set(node.id, currentIteration)

  for (const op of editor(edits)) {
    if (currentIteration !== writing.get(node.id)) return
    op(node)
    await wait(speed + speed * (Math.random() - 0.5))
  }
  writing.delete(node.id)
}

export function* editor(edits) {
  for (const edit of edits) {
    yield node => requestAnimationFrame(() => (node.textContent = edit))
  }
}

export function* writer([...text], startIndex = 0, endIndex = text.length) {
  while (startIndex < endIndex) {
    yield text.slice(0, ++startIndex).join('')
  }
}

export function* deleter([...text], startIndex = 0, endIndex = text.length) {
  while (endIndex > startIndex) {
    yield text.slice(0, --endIndex).join('')
  }
}

export function* deleteWords(text) {
  text = text.split(' ')
  while (text.length) {
    text.pop()
    yield text.join(' ')
  }
}

export function getOverlap(start, [...end]) {
  return [...start, NaN].findIndex((char, i) => end[i] !== char)
}
