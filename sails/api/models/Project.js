/**
 * Project.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        title: 'string',
        description: 'string',
        url: 'string',
        icon: {
            type: 'string',
            defaultsTo: 'icon-jagged'
        },
        experience: 'integer',
        images: 'array',
        position: {
            type: 'integer',
            defaultsTo: 100
        },
        featured: {
            type: 'boolean',
            defaultsTo: false
        }
    }
};