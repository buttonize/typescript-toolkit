import { describe, it, expect } from 'vitest'
import { ts } from '../src/index'

describe('index', () => {
	it('should do', () => {
		expect(ts.f()).toEqual('a')
	})
})
