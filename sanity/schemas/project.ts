// creating project for sanity database 
// terminal --> cd sanity
// npm run dev --> for sanity database that is created now
// terminal provides link --> localhost..
// query --> *[_type == "project"] show the data of the api 
// select what specific data we need
// in this project QUERY used is --> *[_type == "project"] {
//   link,
//   title,
//   overview,
//   _id,
//   gitlink,
//   "imageURL": image.asset->url
// }

export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'overview',
            type: 'string',
            title: 'Small Overview',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: 'link',
            type: 'string',
            title: 'Link',
        },
        {
            name: 'gitlink',
            type: 'string',
            title: 'Github Link'
        },
    ],
}