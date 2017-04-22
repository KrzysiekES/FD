module.exports = {
    context: __dirname,
     entry: [
         "index.html"],
    devServer: {
        contentBase: __dirname + "/",
        port: 8081
    }
};