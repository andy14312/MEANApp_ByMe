var mongoose = require('mongoose');
var courseSchema = mongoose.Schema({
    title: {
        type: String
        , required: '{PATH} is required!'
    }
    , featured: {
        type: Boolean
        , required: '{PATH} is required!'
    }
    , published: {
        type: Date
        , required: '{PATH} is required!'
    }
    , tags: [String]
});
var Course = mongoose.model('Course', courseSchema);

exports.createDefaultCourses = function () {
    Course.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            Course.create({
                title: 'featured course 1'
                , featured: true
                , published: new Date('08/15/2016')
            });
            Course.create({
                title: 'featured course 2'
                , featured: true
                , published: new Date('05/15/2016')
                , tags: ['tag1', 'tag2']
            });
            Course.create({
                title: 'new course 1'
                , featured: false
                , published: new Date('08/15/2015')
                , tags: ['tag1', 'tag2']
            });
            Course.create({
                title: 'new course 2'
                , featured: false
                , published: new Date('08/15/2014')
                , tags: ['tag1', 'tag2']
            });
            Course.create({
                title: 'new course 3'
                , featured: false
                , published: new Date('08/17/2016')
                , tags: ['tag1', 'tag2']
            });
            Course.create({
                title: 'new course 4'
                , featured: false
                , published: new Date('08/02/2016')
                , tags: ['tag1', 'tag2']
            });
            Course.create({
                title: 'new course 5'
                , featured: false
                , published: new Date('06/15/2016')
                , tags: ['tag1', 'tag2']
            });
            Course.create({
                title: 'new course 6'
                , featured: false
                , published: new Date('08/15/2016')
                , tags: ['tag1', 'tag2']
            });
            Course.create({
                title: 'new course 7'
                , featured: false
                , published: new Date('08/15/2018')
                , tags: ['tag1', 'tag2']
            });
            Course.create({
                title: 'new course 8'
                , featured: false
                , published: new Date('08/15/2011')
                , tags: [ 'tag2']
            });
            Course.create({
                title: 'featured course 3'
                , featured: true
                , published: new Date('08/15/2010')
                , tags: ['tag1', 'tag2']
            });
            Course.create({
                title: 'featured course 4'
                , featured: true
                , published: new Date('09/15/2016')
                , tags: ['tag1', 'tag2']
            });
            Course.create({
                title: 'featured course 5'
                , featured: true
                , published: new Date('10/15/2016')
                , tags: ['tag1']
            });
            Course.create({
                title: 'featured course 6'
                , featured: true
                , published: new Date('08/14/2016')
                , tags: ['tag1', 'tag2']
            });
            Course.create({
                title: 'featured course 7'
                , featured: true
                , published: new Date('08/13/2016')
                , tags: ['tag2']
            });
            Course.create({
                title: 'featured course 8'
                , featured: true
                , published: new Date('12/15/2016')
                , tags: ['tag1', 'tag2']
            });
        }
    });
}