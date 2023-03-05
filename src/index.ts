import type { Handler } from 'aws-lambda'

export type ButtonizeEvent<Args extends Record<string, string> = {}> = {
	timestamp: number
	identity: {
		user: {
			id: string
			email: string
			firstName: string
			lastName: string
			groups: {
				id: string
				name: string
			}[]
		}
		organization: {
			id: string
			name: string
		}
	}
	args: Args
}

export type ButtonizeResponse = {
	format: 'markdown' | 'json' | 'text'
	body: string
}

export type ButtonizeHandler<Args extends Record<string, string> = {}> =
	Handler<ButtonizeEvent<Args>, ButtonizeResponse>
