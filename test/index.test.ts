import { Context } from 'aws-lambda'
import { describe, it, expect } from 'vitest'
import { ButtonizeHandler } from '../src/index'

describe('index', () => {
	it('should do', async () => {
		const handler: ButtonizeHandler<{ a: string }> = async (event) => {
			return {
				format: 'json',
				body: JSON.stringify(event)
			}
		}

		await expect(
			await handler(
				{
					timestamp: 12345,
					args: {
						a: 'b'
					},
					identity: {
						user: {
							email: 'asda@asda.cmo',
							firstName: 'asda',
							lastName: 'xzcz',
							groups: [],
							id: '1231231'
						},
						organization: {
							name: 'asda',
							id: 'sdascz'
						}
					}
				},
				{} as Context,
				() => {}
			)
		)
	})
})
