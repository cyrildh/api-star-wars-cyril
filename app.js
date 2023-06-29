const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = "secretKey";
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('swagger/swagger.yml');

const app = express();
app.use(cors())

const uri = "mongodb+srv://totsys:12345@cluster0.sgtsdmi.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((error) => console.log('Connexion à MongoDB échouée !', error));

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema);
app.use('cors',cors);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const routes = require('./routes/app'); // Assurez-vous de changer le chemin d'accès si nécessaire

app.use('/', routes);

// app.post('/register', async (req, res) => {
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10);
//         const user = new User({ username: req.body.username, password: hashedPassword });
//         await user.save();
//         await res.send('/')
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Une erreur s\'est produite lors de l\'inscription');
//     }
// });
// app.get('/register', (req, res) => {
//     res.send(`
//         <h1>Inscription</h1>
//         <form action="/register" method="post">
//             <label for="username">Nom d'utilisateur:</label><br>
//             <input type="text" id="username" name="username"><br>
//             <label for="password">Mot de passe:</label><br>
//             <input type="password" id="password" name="password"><br>
//             <input type="submit" value="S'inscrire">
//         </form>
//     `);
// });

// app.post('/', async (req, res) => {
//     try {
//         const user = await User.findOne({ username: req.body.username });
//         if (!user || !await bcrypt.compare(req.body.password, user.password)) {
//             return res.status(400).send('Invalid username or password');
//         }
//         res.redirect('/api-docs');
//
//     } catch {
//         res.status(500).send();
//     }
// });
// app.get('/', (req, res) => {
//     res.send(`
//         <h1>Connexion</h1>
//         <form action="/" method="post">
//             <label for="username">Nom d'utilisateur:</label><br>
//             <input type="text" id="username" name="username"><br>
//             <label for="password">Mot de passe:</label><br>
//             <input type="password" id="password" name="password"><br>
//             <input type="submit" value="Se connecter">
//             <a href="/register" >S'inscrire
//         </form>
//     `);
// });


// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];
//
//     if (token == null) return res.sendStatus(401);
//
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403);
//         req.user = user;
//         next();
//     });
// }
//

// app.use('/api-docs', authenticateToken, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => console.log('Server running on port 3000'));
