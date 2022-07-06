const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main(){
  await mongoose.connect("mongodb://localhost:27017/fruitsDB");

  const fruitSchema = new mongoose.Schema({
    name: {
      type: String,

    },
    score: {
      type: Number,
      min: 1,
      max: 10
    },
    review: String
  });

  const Fruit = mongoose.model("Fruit",fruitSchema);

  // const fruit = new Fruit ({
  //   rating: 10,
  //   review: "Peaches are great!"
  // });
  //
  // await fruit.save();

  await Fruit.deleteMany({ name: "Peach" });

  const fruits = await Fruit.find();
  console.log(fruits);
  // fruits.forEach(function(fruit){
  //   console.log(fruit.name);
  // });

  mongoose.connection.close();

}
