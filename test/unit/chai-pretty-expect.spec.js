describe('plain object', function() {
	it('should return debug message', function() {
		try {
			expect(false, {debugInfo: 'useful information'}).to.be.ok;
		} catch (e) {
			if (e.name === 'AssertionError') {
				expect(e).to.have.property('message', "{\n\t\"debugInfo\": \"useful information\"\n}: expected false to be truthy");
			} else {
				throw e;
			}
		}
	});
});