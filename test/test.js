import * as assert from 'subtest/assert'

/**
 * @type {import('subtest').Suite}
 */
export const test = {
  'skip should not run': (assert) => {
    assert.fail('should not run')
  },

  'assert ok': () => {
    /** @type {unknown} */
    const input = true
    assert.ok(input)
  },

  'should run': (assert) => {
    assert.equal(1, 1)
  },

  'assert notEqual': (assert) => {
    assert.notEqual({ x: 1 }, { x: 1 })
  },
  'assert deepEqual': (assert) => {
    assert.deepEqual({ x: 1 }, { x: 1 })
  },
  'assert notDeepEqual': (assert) => {
    assert.notDeepEqual({ x: 1 }, { x: 1, y: 1 })
  },
  'assert throws pattern': (assert) => {
    assert.throws(() => {
      throw new Error('Boom')
    }, /Boom/)
  },
  'assert throws string': (assert) => {
    assert.throws(() => {
      throw new Error('Boom')
    })
  },
}
