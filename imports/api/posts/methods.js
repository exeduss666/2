/**
 * Created by Robi on 4/25/2017.
 */
import {Meteor} from 'meteor/meteor';
import Posts from '/imports/api/posts/collection';

Meteor.methods({
    'create_a_standard_post': function () {
        return Posts.insert({type: 'standard'})
    },

    'create_a_post': function (type) {
        if (!type) {
            throw new Meteor.Error('error', 'The type of Post was not specified', 'Some details');
        }

        return Posts.insert({type: type});
    },

    'post.find': function (id) {
        return Posts.findOne({_id: id});
    },

    'post.remove': function (id) {
        return Posts.remove({_id: id});
    },

    'posts.list': function () {
        return Posts.find().fetch();
    },

    'post.add': function(data) {
        Posts.insert(data);
    },
    'post.edit': function(id, data) {
        Posts.update(id, {
            $set: {
                name: data.name
            }
        });
    }
});