import { express } from 'express';
import { path } from 'path';
import { session } from 'express-session';
import { mongoose } from 'mongoose';
import { dotenv } from 'dotenv';
import { cors } from 'cors';
import { morgan } from 'morgan';

dotenv.config();

mongoose.set('strictQuery', false);

const { mongoUrl } = process.env;

const database = 'postBoard';

const mongoDb = `${mongoUrl + database}?retryWrites=true&w=majority`;

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
}

connectToDatabase();

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(session({
  secret: 'mysecret',
  cookie: { maxAge: 3600000 },
  saveUninitialized: false,
  resave: false,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

// arhivo base del proyecto. Aca
// se encuentra toda la config del proyecto
// como router, config de auths , etc
