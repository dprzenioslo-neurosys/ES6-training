
var manual = {
    created: "2017-11-11",
    lastEdited: "2017-11-16",
    modules: {
        text: {
            chunked: [{
                chunks: [{
                    value: "Text1",
                },
                {
                    value: "Text2",
                },
                {
                    value: "Text3",
                },
                ],

            }]
        },
        images: {
            chunked: [{
                chunks: [{
                    value: "http://api.media.manual.to/Image1.jpg",
                },
                {
                    value: "http://api.media.manual.to/Image2.jpg",
                },
                {
                    value: "http://api.media.manual.to/Image3.jpg",
                }],
            }]

        },
    }
};


console.log(items);
// Should print:
// [ { value: 'http://api.media.manual.to/Image1.jpg' },
// { value: 'http://api.media.manual.to/Image2.jpg' },
// { value: 'http://api.media.manual.to/Image3.jpg' } ]
// if not found, should print:
// [{value: 'http://api.media.manual.to/Default.jpg'}]