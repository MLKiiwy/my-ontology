// Simple movie question generator

{
	generate: 'question',
	version: 0.1,
	source: 'url',
	format: 'json',
	type: 'http://schema.org/Movie'
	data: {
		label : "Quel acteur joue dans \"%name\"",
		answers: {
			number:4,
			type: 'http://schema.org/Person',
			good: {
				number:1,
				source: 'actors'
			},
			bad: {
				number:3,
				source: {
					service: 'similar',
				}
			}
			data: {
				label: "%name"
			}
		}
	}
}