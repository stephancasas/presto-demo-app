export default {
    input: 'src/presto/index.html',

    include: [
        'src/presto/shared/**/*.html',
        'src/presto/components/**/*.html'
    ],

    output: {
        file: 'dist/public/index.html',
        props: {
            userFullName: "Stephan Casas",
            api: 'https://jsonplaceholder.typicode.com/users'
        }
    }
}