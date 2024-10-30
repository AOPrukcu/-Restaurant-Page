// webpack.config.js
const path = require("path"); // Node.js'in path modülünü ekliyoruz
const HtmlWebpackPlugin = require("html-webpack-plugin"); // HTML dosyası oluşturmak için gerekli

module.exports = {
  mode: "development", // Geliştirme modunu ayarlıyoruz
  entry: "./src/index.js", // Giriş dosyamızı tanımlıyoruz
  output: {
    filename: "main.js", // Çıktı dosyasının adı
    path: path.resolve(__dirname, "dist"), // Çıktı dizinini tanımlıyoruz
    clean: true, // Her derlemede eski dosyaları sil
  },
  devtool: "eval-source-map", // Hata ayıklama için kaynak haritası
  devServer: {
    static: path.join(__dirname, 'dist'), // Statik dosyaların dizini
    compress: true, // Gzip sıkıştırma
    port: 9000, // Geliştirici sunucusunun dinleyeceği port
    watchFiles: ["./src/template.html"], // İzlenecek dosyalar
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Kullandığımız HTML şablonu
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // CSS dosyalarını işle
        use: ["style-loader", "css-loader"], // CSS'i yükle
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Resim dosyalarını işle
        type: "asset/resource", // Resimleri varlık olarak yükle
      },
      {
        test: /\.js$/, // JavaScript dosyalarını işle
        exclude: /node_modules/, // node_modules klasörünü hariç tut
        use: {
          loader: "babel-loader", // ES6+ için Babel yükleyici
          options: {
            presets: ["@babel/preset-env"], // Modern JavaScript'i eski tarayıcılara uyumlu hale getir
          },
        },
      },
    ],
  },
};
