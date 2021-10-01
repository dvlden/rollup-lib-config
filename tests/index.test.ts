import { greeting } from '../src/index'

describe('index.ts', () => {
  it('greets a person', () => {
    const message = greeting('anonymous')
    expect(message).toBe('Hello, anonymous!')
  })
})
