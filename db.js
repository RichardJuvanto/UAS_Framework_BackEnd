//const url = "mongodb+srv://richard:TUg4WlGyAxmGShuw@cluster0.te0ez.mongodb.net/kelompok2?retryWrites=true&w=majority";
const url = 'mongodb://richard:TUg4WlGyAxmGShuw@cluster0-shard-00-00.te0ez.mongodb.net:27017,cluster0-shard-00-01.te0ez.mongodb.net:27017,cluster0-shard-00-02.te0ez.mongodb.net:27017/kelompok2?ssl=true&replicaSet=atlas-aqey2m-shard-0&authSource=admin&retryWrites=true&w=majority';
 
const connectionParams = {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true,
};
mongoose
   .connect(url, connectionParams)
   .then(() => {
       console.log("Connected to database ");
   })
   .catch((err) => {
       console.error(`Error connecting to the database. \n${err}`);
   });
