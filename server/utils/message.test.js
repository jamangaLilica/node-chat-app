var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message objet', () => {
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, text });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Lilica';
        var lat = '50.1203502';
        var long = '5.9989867';
        var url = 'https://www.google.com/maps?q=50.1203502,5.9989867';
        var message = generateLocationMessage(from, lat, long);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, url });

    });
});