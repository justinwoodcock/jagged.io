/**
 * Tech.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        title: 'string',
        client: 'string',
        description: 'string',
        url: 'string',
        icon: 'string',
        tech: 'array',
        tags: 'array',
        attachments: 'array',
        screenshots: 'array'
    }
};