export default {
    input: 'src/snowblade/index.html',

    include: [
        'src/snowblade/shared/**/*.html',
        'src/snowblade/components/**/*.html'
    ],

    output: {
        file: 'dist/public/index.html',
        props: {
            userFullName: "Stephan Casas",
            api: 'https://jsonplaceholder.typicode.com/users'
        }
    }
}