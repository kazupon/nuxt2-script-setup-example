type Meta = Record<string, Record<string, { title: string; description: string; heading: string }>>

export const meta: Meta = {
  sample: {
    index: {
      title: 'サンプル',
      description: '',
      heading: 'サンプルページ'
    }
  }
}